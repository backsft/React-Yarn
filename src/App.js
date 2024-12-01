import { useState } from 'react';
import './App.css';
import Header from './Header';
import Test from './Pages/Test';
import { Route, Router, Routes } from 'react-router-dom';

function App() {
  const [buttonStatus, SetButtonStatus] = useState(false);
  const [showStatus, SetShowStatus] = useState(false);

  let x = 11;
  if (x === 10) {
    console.log(showStatus);
  }

  return (
    <div className="App">

      {/* <Routes>
        <Route path='/Test' element={<Test />}>

        </Route>
      </Routes> */}

      
      <Header />
      <div className="myTest">Hello</div>
      <button
        className="displayButton"
        onClick={() => SetButtonStatus(!buttonStatus)}
      >

        {buttonStatus ? 'Hide Content' : 'Display Content'}
      </button>

      {buttonStatus && (
        <p className="myStories">
          এরই মাঝে বাংলাদেশ ইস্যুতে ভারতে যা হচ্ছে, সে পরিস্থিতি নিয়ে
          বলতে গিয়ে পশ্চিমবঙ্গের মন্ত্রী সিদ্দিকুল্লাহ চৌধুরী বললেন,
          'বাড়াবাড়ি হচ্ছে'। একই সঙ্গে এসব ইস্যুকে বাংলাদেশের অভ্যন্তরীণ বিষয়
          বলেও উল্লেখ করেন। বাংলাদেশ নিয়ে বাড়াবাড়ি হচ্ছে উল্লেখ করে মন্ত্রী
          বলেন, বাংলাদেশে বিভিন্ন প্রশাসনিক পদে বসে রয়েছেন হিন্দুরা। থানার বড়
          বাবু, বিচারপতি, এসপি, ডিএম, কত হিন্দু। এগুলো দেখা যায় না?
        </p>
      )}

      <br></br>


      <button onClick={() => SetShowStatus(!showStatus)}>{showStatus ? 'Done' : 'Success'}</button>

      {
        showStatus && <p>Saved Successfully</p>

      }

   
    </div>
  );
}

export default App;
