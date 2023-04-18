import './App.css';
import {useState, useEffect} from 'react'
import Form from './Conponents/Form'
import ListDown from './Conponents/ListsDown'
import { isCursorAtStart } from '@testing-library/user-event/dist/utils';

function App() {

  const [lists, setlist] = useState({Items: [
    {
      text: 'Your Welcome',
      key: Math.floor(Math.random() * 5000),
      isCompelete: false
    },
    {
      text: 'Livin Life. Life is Good',
      key: Math.floor(Math.random() * 5000),
      isCompelete: false
    },
    {
      text: 'Good Bye Soon',
      key: Math.floor(Math.random() * 5000),
      isCompelete: false
    }
  ]})

  function CompeleteCheck(key){
    let check = lists.Items.map(list => {
      if(list.key === key){
        return {...list, isCompelete: !list.isCompelete}
      }else{
        return list;
      }
    })

    setlist({
      Items: check
    })
  }


  function DeleteItem(key){
    let RemoveItem = lists.Items.filter(list => list.key !== key)

    setlist({
      Items: RemoveItem
    })
  }

  function Handle(e){
    let hold = {...lists}
    hold.Items.text = e.target.value;
    setlist(hold)
  }

  function AddItem(e){
    e.preventDefault()
    let inpuText = lists.Items.text

    let newItem = {
      text: inpuText,
      key: Math.floor(Math.random() * 5000),
      isCompelete: false
    }
    const AllIn = [...lists.Items, newItem]

    setlist({
      Items: AllIn
    })
  }

  useEffect(() => {
    LocalStorage()
  },[])

  useEffect(() => {
    svalocalstorage()
  },[lists.Items])

  function svalocalstorage(){
    localStorage.setItem('lists', JSON.stringify(lists.Items))
  }

  function LocalStorage(){
    if(localStorage.getItem('lists') === null){
      localStorage.setItem('lists', JSON.stringify([]))
    }else{
      let standed = JSON.parse(localStorage.getItem('lists'))
      setlist({Items: standed})
    }
  }


 return(
   <div>
   <Form Lists={lists.Items} Handle={Handle} AddItem={AddItem} />
   <ListDown Lists={lists.Items}
   DeleteItem={DeleteItem} CompeleteCheck={CompeleteCheck} />
   </div>
 )
}

export default App;
