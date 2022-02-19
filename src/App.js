import { useState } from 'react';
import { BiCaretRight } from 'react-icons/bi';
import First from './First';

const data = [
  {
    identifier: '1st',
    name: 'Option 01',
    element: [
      {
        identifier: '1st',
        name: 'option 01.01'
      },
      {
        identifier: '1st',
        name: 'option 01.02'
      },
      {
        identifier: '1st',
        name: 'option 01.03'
      },
    ]
  },
  {
    identifier: '2nd',
    name: 'Option 02',
    element: [
      {
        identifier: '2nd',
        name: 'option 02.01'
      },
      {
        identifier: '2nd',
        name: 'option 02.02'
      },
      {
        identifier: '2nd',
        name: 'option 02.03'
      },
    ]
  },
  {
    identifier: '3rd',
    name: 'Option 03'
  },
  {
    identifier: '4th',
    name: 'Option 04'
  }
]

function App() {
  const [firstOption, setFirstOption] = useState(false);
  const [secondOption, setSecondOption] = useState(false)

  return (
    <div className="App">
      <div className="menu-wrapper">
        <div className="wrapper">
          <First
            firstOption={firstOption}
            setFirstOption={setFirstOption}
            data={data}
            secondOption={secondOption}
            setSecondOption={setSecondOption}
          />
          {/* <div className={`second-child ${firstOption ? 'active' : 'inactive'}`}>
            <ul>
              <li>
                Option 02.01
              </li>
              <li>
                Option 02.02
              </li>
              <li onClick={() => setSecondOption(!secondOption)}>
                Option 02.03 <span><BiCaretRight /></span>
              </li>
              <li>
                Option 02.04
              </li>
            </ul>
          </div> */}
          <div className={`third-child ${secondOption ? 'active' : 'inactive'}`}>
            <ul>
              <li>
                Option 03.01
              </li>
              <li>
                Option 03.02
              </li>
              <li>
                Option 03.03 <span><BiCaretRight /></span>
              </li>
              <li>
                Option 03.04
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
