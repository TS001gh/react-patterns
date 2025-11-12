import { useRef } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage';

const LocalStorageExample = () => {
    const { value, setValue } = useLocalStorage('user', 'ahmed');
    const name = useRef();

    const handleSave = () => {
      if (name.current.value.trim()) {
        setValue(name.current.value);
        name.current.value = '';
      }
    };

    return (
      <div className='flex flex-col gap-2 border border-red-500 p-4'>
        <span className='text-lg font-semibold'>The value is: <span className='text-blue-600'>{value}</span></span>
        <input 
          type='text' 
          ref={name} 
          placeholder='Type the user name and press the button below to save it'
          className='border border-gray-300 p-2 rounded'
        />
        <button 
          onClick={handleSave}
          className='bg-blue-500 text-white p-2 rounded hover:bg-blue-600'
        >
          Save
        </button>
      </div>
    )
}

export default LocalStorageExample