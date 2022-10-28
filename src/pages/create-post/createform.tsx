import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

interface CreateFormData {
  title: string;
  description: string;
}

function Createform() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    title: yup.string().required('Please enter title'),
    description: yup.string().required('Please enter description'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateFormData>({
    resolver: yupResolver(schema),
  });

  const postsRef = collection(db, 'posts');

  const onCreatePost = async (data: CreateFormData) => {
    await addDoc(postsRef, {
      ...data,
      username: user?.displayName,
      userId: user?.uid,
    });
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit(onCreatePost)}>
      <h1>Create Post</h1>
      <input placeholder='Title...' {...register('title')} />
      <p className='errorTags'>{errors.title?.message}</p>
      <textarea
        placeholder='Description...'
        rows={8}
        {...register('description')}
      />
      <p className='errorTags'>{errors.description?.message}</p>
      <input type='submit' id='submit-btn' />
    </form>
  );
}

export default Createform;
