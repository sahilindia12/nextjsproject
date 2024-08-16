// src/CRUDComponent.js
'use client'
import React, { useState, useEffect } from 'react';
import { collection,addDoc, getDocs, updateDoc, deleteDoc, doc  } from 'firebase/firestore';
import { db } from '../page';
const CRUDComponent = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [updateItemId, setUpdateItemId] = useState('');
  const [updateItemValue, setUpdateItemValue] = useState('');

  const itemsCollectionRef = collection(db, 'items');

  // Fetch items from Firestore
  const fetchItems = async () => {
    const data = await getDocs(itemsCollectionRef);
    setItems(data.docs.map((doc) => ({ ...doc.data(), id: 2})));
    console.log(items)
  };
console.log('firdadta',items)
  useEffect(() => {
    fetchItems();
  }, []);

  // Add new item
  const addItem = async () => {
    try {
        const idd=new Date()
      await addDoc(itemsCollectionRef, { name: newItem ,id:idd});
      setNewItem('');
      fetchItems();
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  // Update item
  const updateItem = async (id) => {
    try {
      const itemDoc = doc(db, 'items', id);
      await updateDoc(itemDoc, { name: updateItemValue });
      setUpdateItemId('');
      setUpdateItemValue('');
      fetchItems();
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  // Delete item
  const deleteItem = async (id) => {
    try {
      const itemDoc = doc(db, 'items', 2);
      await deleteDoc(itemDoc);
      fetchItems();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div>
      <h2>CRUD Operations</h2>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="New item"
      />
      <button onClick={addItem}>Add Item</button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {updateItemId === item.id ? (
              <>
                <input
                  type="text"
                  value={updateItemValue}
                  onChange={(e) => setUpdateItemValue(e.target.value)}
                />
                <button onClick={() => updateItem(item.id)}>Update</button>
              </>
            ) : (
              <>
                {item.name}
                <button onClick={() => setUpdateItemId(item.id)}>Edit</button>
                <button onClick={() => deleteItem(item.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>


      <button onClick={()=>fetchItems()}>fetchdata</button>

      {
        items.map((itemn)=>{
            return (
                <>
            <div className=' flex justify-center' key={itemn.id}> <h1>{itemn.name}</h1> <button onClick={()=>deleteItem(itemn.id)}>Delete</button>    </div>
                </>
            )
        })
      }
    </div>
  );
};

export default CRUDComponent;
