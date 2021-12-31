import React, { useEffect, useState } from 'react';
import { db, auth, storage } from '../firebase';
import {
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
  Timestamp,
} from 'firebase/firestore';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import User from '../components/User';
import MessageForm from './../components/MessageForm';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [chat, setChat] = useState('');
  const [text, setText] = useState('');
  const [img, setImg] = useState('');

  const user1 = auth.currentUser.uid;
  useEffect(() => {
    const usersRef = collection(db, 'users');
    //create a new query object
    const q = query(usersRef, where('uid', 'not-in', [auth.currentUser.uid]));
    //execute query
    const unsub = onSnapshot(q, (querySnapshot) => {
      let users = [];
      querySnapshot.forEach((doc) => {
        users.push(doc.data());
      });
      setUsers(users);
    });
    return () => unsub();
  }, []);

  const selectUser = (user) => {
    setChat(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user2 = chat.uid;

    const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;

    let url;
    if (img) {
      const imgRef = ref(
        storage,
        `images/${new Date().getTime()} - ${img.name}`
      );
      const snap = await uploadBytes(imgRef, img);
      const dlUrl = await getDownloadURL(ref(storage, snap.ref.fullPath));
      url = dlUrl;
      console.log(url);
    }

    await addDoc(collection(db, 'messages', id, 'chat'), {
      text,
      from: user1,
      to: user2,
      createdAt: Timestamp.fromDate(new Date()),
      media: url || '',
    });
    setText('');
  };

  return (
    <div className='home_container'>
      <div className='users_container'>
        {users.map((user) => {
          return <User key={user.uid} user={user} selectUser={selectUser} />;
        })}
      </div>
      <div className='messages_container'>
        {chat ? (
          <>
            <div className='messages_user'>
              <h3>{chat.name}</h3>
            </div>
            <MessageForm
              handleSubmit={handleSubmit}
              text={text}
              setText={setText}
              setImg={setImg}
            />
          </>
        ) : (
          <h3 className='no_conv'>Select a user to start conversation</h3>
        )}
      </div>
    </div>
  );
};

export default Home;
