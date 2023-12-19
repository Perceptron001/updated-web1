import React, { useState } from 'react';
import get_data from './together.js';


const examples = [
  'Welcome to the LegalGeni.Your Personal Document Generater and ChatBot',
];

const Chat = () => {
  const [chat, setChat] = useState([]);
  const [chatHistory, setChatHistory] = useState([]);
  const [title, setTitle] = useState('');
  const [input, setInput] = useState('');
  const [fileInput, setFileInput] = useState(null);

  const handleSend = async () => {
    if (input.trim()) {
      setChat([...chat, { role: 'user', content: input }]);
      setInput('');

      if (fileInput && fileInput.files.length > 0) {
        const file = fileInput.files[0];
        console.log('File uploaded:', file.name);
        setFileInput(null);
      }

      const readData = await get_data(input);
      setChat([
        ...chat,
        { role: 'user', content: input },
        { role: 'assistant', content: readData },
      ]);

      if (!title) {
        const createTitle = await fetch('http://192.168.0.124:5005/upshot', {
          method: 'POST',
          headers: {
            'Content-Type': 'raw',
          },
          body: {
            title: input,
          },
        });

        const newTitle = await createTitle.json();
        setTitle(newTitle?.title);
        setChatHistory([...chatHistory, newTitle]);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && (input.trim() || (fileInput && fileInput.files.length > 0))) {
      handleSend();
    }
  };

  return (
    <div className='h-screen_w-screen_flex_bg-container'>
        <div className= 'w_20_h-screen_bg_0c0c15_text-white_p-4'>
        <div className='h_5'>
        
          <button
            className='w_full_h_50px_border_rounded_hover_bg_slate_600'
            onClick={() => {
              setChat([]);
              setTitle('');
            }}
          >
            + New Chat
          </button>
        </div>
        <div className='h-[70%] overflow-scroll shadow-lg hide-scroll-bar mb-4'>
          {chatHistory.map((item, index) => (
            <div
              className='py-3 text-center rounded mt-4 text-lg font-light flex items-center px-8 hover:bg-slate-600 cursor-pointer'
              key={index}
            >
              <span className='mr-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='icon icon-tabler icon-tabler-message'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='currentColor'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                  <path d='M8 9h8'></path>
                  <path d='M8 13h6'></path>
                  <path d='M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z'></path>
                </svg>
              </span>
              <span className='text-left'>{item.title}</span>
            </div>
          ))}
        </div>
      </div>
      <div className='w_80'>
        {chat.length > 0 ? (
          <div className='h_80_overflow-scroll_hide-scroll-bar_pt-8'>
            {chat.map((item, index) => (
              <div
                className={`w_60_mx-auto_p-6_text-white_flex ${
                  item.role === 'assistant' && 'bg-slate-900 rounded'
                }`}
                key={index}
              >
                <span className='mr-8_p-2_bg-slate-500_text-white_rounded-full_h-full'>
                  {item.role === 'user' ? (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='icon icon-tabler icon-tabler-user-bolt'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      strokeWidth='2'
                      stroke='currentColor'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                      <path d='M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0'></path>
                      <path d='M6 21v-2a4 4 0 0 1 4 -4h4c.267 0 .529.026.781.076'></path>
                      <path d='M19 16l-2 3h4l-2 3'></path>
                    </svg>
                  ) : (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='icon icon-tabler icon-tabler-robot'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      strokeWidth='2'
                      stroke='currentColor'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                      <path d='M7 7h10a2 2 0 0 1 2 2v1l1 1v3l-1 1v3a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-3l-1 -1v-3l1 -1v-1a2 2 0 0 1 2 -2z'></path>
                      <path d='M10 16h4'></path>
                      <circle cx='8.5' cy='11.5' r='.5' fill='currentColor'></circle>
                      <circle cx='15.5' cy='11.5' r='.5' fill='currentColor'></circle>
                      <path d='M9 7l-1 -4'></path>
                      <path d='M15 7l1 -4'></path>
                    </svg>
                  )}
                </span>
                <div className='leading-loose' style={{ whiteSpace: 'break-spaces' }}>
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className='h-80_flex_flex-col_justify-center_items-center_text-white'>
            <div className='text-4xl_font-bold_mb-8'>LegalGeni</div>
            <div className='flex_flex-wrap_justify-around_max-w-900'>
              {examples.map((item, index) => (
                <div
                  className='text-lg_font-light_mt-4_p-4_border_rounded_cursor-pointer_min-w-400_hover:bg-slate-800'
                  onClick={() => setInput(item)}
                  key={index}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className='h-20'>
          <div className='flex_flex-col_items-center_justify-center_w-full_h-full_text-white'>
            <div className='w_60_flex_justify-center_relative'>
              <input
                type='text'
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                value={input}
                className='w-full_rounded-lg_p-4_pr-16_bg-slate-800_text-white'
                placeholder='Type your message here...'
              />

              {/* <label htmlFor='file-upload' className='ml-2_mt-1_5_cursor-pointer'>
                {<svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='2 0 24 24'
                  stroke-width='2'
                  stroke='currentColor'
                  className='w-8 h-15'
                >
                  <path stroke-linecap='round' stroke-linejoin='round' d='M3 21l9-9 9 9'></path>
                </svg> }
                <input
                  type='file'
                  id='file-upload'
                  accept='.pdf, .doc, .docx'
                  onChange={(e) => setFileInput(e.target)}
                  className='hidden'
                />
              </label>  */}

              <span
                className='ml-2 mt-4_cursor-pointer'
                onClick={() => (input.trim() || (fileInput && fileInput.files.length > 0)) && handleSend()}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='icon icon-tabler icon-tabler-plus'
                  width='24'
                  height='30'
                  viewBox='0 0 24 18'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                  <path d='M10 14l11-11'></path>
                  <path d='M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5'></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
