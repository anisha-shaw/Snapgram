import { appwriteConfig, client, databases } from "@/lib/appwrite/config"
import { useEffect, useState } from "react"
import './chat.css'
import { ID } from "appwrite";
import { Trash2 } from "react-feather";
import { useUserContext } from "@/context/AuthContext";
import EmojiPicker from "emoji-picker-react";



const Chats = () => {
  const { user } = useUserContext()
  const [messages, setMessages] = useState([]);
  const [messageBody, setMessageBody] = useState('');
  const [open, setOpen] = useState(false)

  const handleEmoji = (e) => {
    setMessageBody(prev => prev + e.emoji)
    setOpen(false)
  }

  useEffect(() => {
    getMessages();

    const unsubscribe = client.subscribe(`databases.${appwriteConfig.databaseId}.collections.${appwriteConfig.chatId}.documents`, response => {

      if (response.events.includes("databases.*.collections.*.documents.*.create")) {
        console.log('A MESSAGE WAS CREATED')
        setMessages(prevState => [response.payload, ...prevState])
      }

      if (response.events.includes("databases.*.collections.*.documents.*.delete")) {
        console.log('A MESSAGE WAS DELETED!!!')
        setMessages(prevState => prevState.filter(message => message.$id !== response.payload.$id))
      }
    });

    console.log('unsubscribe:', unsubscribe)

    return () => {
      unsubscribe();
    };
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault()
    let payload = {
      user_id: user.$id,
      username: user.name,
      body: messageBody
    }

    let response = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.chatId,
      ID.unique(),
      payload,


    )
    setMessageBody('')
  }

  async function getMessages() {
    const response = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.chatId,

    )
    console.log(response)
    setMessages(response.documents)

  }

  const deleteMessage = async (id) => {
    await databases.deleteDocument(
      appwriteConfig.databaseId,
      appwriteConfig.chatId,
      id
    );
    setMessages(prevState => prevState.filter(message => message.$id !== id))
  }

  return (
    <main className="container">
      <div >
        <div>
          {messages.map((message) => (
            <div key={message.$id} >

              <div className="message--header">

                <p>
                  {message?.username ? (
                    <span> {message?.username}</span>
                  ) : (
                    'Anonymous user'
                  )}

                  <small className="message-timestamp">{new Date(message.$createdAt).toLocaleString()}</small>
                </p>


                <Trash2 className="delete--btn" onClick={() => { deleteMessage(message.$id) }} />


              </div>

              <div className="message--body">
                <span>{message.body} </span>
              </div>
            </div>
          ))}
        </div>


        <form onSubmit={handleSubmit}>
          <div className="flex pt-4">
            <input
              placeholder="Type something..."
              className="input"
              onChange={(e) => { setMessageBody(e.target.value) }}
              value={messageBody}
            />
            <div className="emoji">
              <img
                src="/assets/icons/emoji.png"
                alt="emoji"
                onClick={() => setOpen(prev => !prev)}
                className="w-12 p-2 cursor-pointer"
              />

              <div className="absolute bottom-16 right-0 w-1/10 p-3 sm:w-1/8 md:w-1/8 lg:w-1/6 xl:w-1/10">
                <EmojiPicker open={open} onEmojiClick={handleEmoji} />
              </div>

            </div>

            <div className="send-btn--wrapper">
              <input type="submit" value='Send' className="btn btn--secondary" />
            </div>
          </div>




        </form>
      </div>

    </main>
  )
}

export default Chats






