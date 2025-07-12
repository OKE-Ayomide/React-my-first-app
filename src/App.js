
import './App.css';

function App() {
  const firstName = 'Oke';
  const lastName = 'Ayomide';
  const age = 20;
  const job = 'Gentleman';
  const inputDetails = 'Enter Your Details'
  const detailsInputBox = <input placeholder={inputDetails} />

  const myArray = [11, 20, 33, 45, 50]
  const myObject = {
    staffName: 'Johnson',
    age: 10
  }
  const blogObj = {
    title: 'Blog Title 1',
    description: 'My name is Oke Ayomide Johnson. I am a passionate learner who enjoys discovering new things and sharing knowledge with others. I studied Industrial and Production Engineering and graduated with excellent results. I also have experience in real estate, public speaking, content writing, and social media management. I believe in hard work, self-improvement, and helping people grow. In my free time, I enjoy reading, traveling, and learning new skills. This blog is a space where I share my thoughts, lessons, and ideas to inspire and inform others.'
  }

  const blogArr = [
    {
      title: 'Blog Title 1',
      description: 'My name is Oke Ayomide Johnson. I am a passionate learner who enjoys discovering new things and sharing knowledge with others. I studied Industrial and Production Engineering and graduated with excellent results. I also have experience in real estate, public speaking, content writing, and social media management. I believe in hard work, self-improvement, and helping people grow. In my free time, I enjoy reading, traveling, and learning new skills. This blog is a space where I share my thoughts, lessons, and ideas to inspire and inform others.'
    },
    {
      title: 'Blog Title 2',
      description: 'My name is Oke Ayomide Johnson. I am a passionate learner who enjoys discovering new things and sharing knowledge with others. I studied Industrial and Production Engineering and graduated with excellent results. I also have experience in real estate, public speaking, content writing, and social media management. I believe in hard work, self-improvement, and helping people grow. In my free time, I enjoy reading, traveling, and learning new skills. This blog is a space where I share my thoughts, lessons, and ideas to inspire and inform others.'
    },
    {
      title: 'Blog Title 3',
      description: 'My name is Oke Ayomide Johnson. I am a passionate learner who enjoys discovering new things and sharing knowledge with others. I studied Industrial and Production Engineering and graduated with excellent results. I also have experience in real estate, public speaking, content writing, and social media management. I believe in hard work, self-improvement, and helping people grow. In my free time, I enjoy reading, traveling, and learning new skills. This blog is a space where I share my thoughts, lessons, and ideas to inspire and inform others.'
    }
  ]

  const blogCards = () => {
    return (
      <div>
        {
          blogArr.map(({ title, description }) => (<div className='BlogCard' key={title}>
            <h3>{title}</h3>
            <p>{description} </p>
            <hr />
          </div>))
        }

      </div>)
  }

  const getFullName = (firstName, lastName) => {
    return (firstName + ' ' + lastName)
  }


  return (
    <div className="App">

      <h3>Full Name: {getFullName(firstName, lastName)}</h3>
      <p>Age: {age}</p>
      <p>Job: {job}</p>

      {detailsInputBox}

      <h2>Staff Name: {firstName} {myObject.staffName}</h2>
      <p>Staff Age: {myArray[0]}</p>

      {blogCards()}

    </div >
  );
}

export default App;
