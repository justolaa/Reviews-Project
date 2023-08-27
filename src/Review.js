import React, { useState } from 'react';
import people from './data';
import { FaArrowAltCircleUp, FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setindex] = useState(0);
  const {name, job, image, text} = people[index];
  
  const checknumber = (number)=> {
if (number > people.length-1) {
  return 0;
}
if (number < 0) {
  return people.length -1;
}
return number
  }
  const nextperson = () =>{
    setindex((index) => {
      let newindex = index +1;
      return checknumber(newindex);
    })
  }
   const prevperson = () =>{
    setindex((index) => {
      let newindex = index -1;
      return checknumber(newindex);
    });
  }

  const randomPerson =()=>{
    let randomnumber =Math.floor(Math.random() * people.length);
    setindex(randomnumber);
    if (randomnumber===index) {
      randomnumber= index+1;
    }
    setindex(checknumber(randomnumber));
  }
  return( <article className='review'>
<div className="img-container">
  <img src={image} alt={name} className='person-img'/>
<span className='quote-icon'>
  <FaQuoteRight/>
</span>
</div>
<h4 className='author'>{name}</h4>
<p className='job'>{job}</p>
<p className='info'>{text}</p>
<div className="button-container">
  <button onClick={prevperson} className='prev-btn'>
    <FaChevronLeft/>
  </button>
  <button onClick={nextperson} className='next-btn'>
    <FaChevronRight/>
  </button>
</div>
 <button onClick={randomPerson} className='random-btn'>
    Surprise Me
  </button>
  </article>);
};

export default Review;
