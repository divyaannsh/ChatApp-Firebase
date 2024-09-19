import './list.css'
import UserInfo from './userinfo/Userinfo'
import ChatList from './chatlist/Chatlist'

const List = () => {
  return (
    <div className='list'>
      <UserInfo />
      <ChatList />
    </div>
  )
}

export default List;