import React from 'react';
import "../home.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Slider } from 'antd';


function Home() {

  return (
    
    <div className='home1'>

<div className="box1">
    <div className="leftbar">

      <div className="toptext">
         <h6>Filter jobs</h6>
         <p>Filter jobs by keyword or timezone</p>
      </div>
        <Form.Select size="sm" className='mainform' >
          <option >Small select</option>
        </Form.Select> 


      <div className="toptext2">
        <p>Job title or keyword</p>
      </div>
        <Form.Select size="sm" className='mainform'>
          <option>Job title or keyword</option>
        </Form.Select> 


      <div className="toptext3">
        <p>Country or timezone</p>
      </div>
        <Form.Select size="sm" className='mainform'>
          <option>Country or timezone</option>
        </Form.Select> 


      <div className="toptext4">
         <p>Company</p>
      </div>
        <Form.Select size="sm" className='mainform'>
          <option>Company name</option>
        </Form.Select> 


      <div className="toptext5" >
        <p>Salary</p>
        <div className="toptext5_1">
           <span>$0</span>
           <span>$100,000+</span>
        </div>
      </div>

        <Slider style={{width:'200px', marginLeft:'15px' }}
             range={{
             draggableTrack: true,
               }}
             defaultValue={[20, 50]}
        />

      <div className="toptext6">
        <div className="toptext6_1">
           <Form.Check aria-label="option 1" />
        </div>
         <div className="toptext6_2">
           <p>Include if no salary specified</p>
          </div>  
       </div>

      <div className="toptext7">
         <p>Job type</p>
      </div>

      <div className="toptext8" style={{height:'10px'}}>
          <div className="toptext8_1">
            <Form.Check aria-label="option 1" />
          </div>
          <div className="toptext8_2">
             <p>Full time</p>
           </div>  
      </div>
            <hr style={{marginTop:'15px'}}/>

      <div className="toptext9">
         <button className='btn2'>
         <p>Clear all</p>
          </button>
          <button className='btn3'>
          <p>Show 100 jobs</p>
          </button>
      </div>

              </div>
        </div>

        <div className="box2">
            <div className="home-top-slice1" >
              <h3 >Popular Books</h3> 
              <Button  style={{ width:'130px',height:'50px', marginLeft:'300px', backgroundColor:'#f4402f', fontFamily:'var(--e-global-typography-text-font-family)',border:'1px solid #f4402f', borderRadius:'30px', fontWeight:'bold', fontSize:'15px'}} variant="success" >View All </Button>
            </div>  
            <hr style={{width:'1008px', marginLeft:'40px'}} />

        <div className="home-top-card-slice">

          <div className="card">
            <div className="image">
              <img src="https://images.template.net/wp-content/uploads/2016/04/27093503/Sky-Blue-Colored-Car-Wallpaper-for-Download.jpg" alt="" />
            </div>
              <div className="card-text">
                <h3 >Rich Dad Poor </h3>
                <p >Misty Figueroa</p>
                <span >$170.03</span>
              </div>
            </div>
          
            <div className="vr" ></div>

            <div className="card">
              <div className="image">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsBb5mVVW87mllVQJm8AH2tJ1HLMgfsdwGsA&usqp=CAU" alt="" />
              </div>
              <div className="card-text">
                <h3 >The Story of Success </h3>
                <p >Misty Figueroa</p>
                <span >$50.89</span>
              </div>
            </div>

            <div className="vr" ></div>

            <div className="card">
              <div className="image">
                <img src="https://assets.whichcar.com.au/image/upload/s--OoaeoZQx--/c_fill,f_auto,q_auto:good/c_scale,w_768/v1/archive/whichcar-media/1368/skoda-superb-ambition-118tsi.jpg" alt="" />
              </div>
              <div className="card-text">
                <h3 >My Dearest Darkest </h3>
                <p >Misty Figueroa</p>
                <span >$914.53</span>
              </div>
            </div>

            <div className="vr" ></div>

            <div className="card">
              <div className="image">
                <img src="https://images.template.net/wp-content/uploads/2016/04/27093503/Sky-Blue-Colored-Car-Wallpaper-for-Download.jpg" alt="" />
              </div>
              <div className="card-text">
                <h3 >House of Sky and... </h3>
                <p >Misty Figueroa</p>
                <span >$72.99</span>
              </div>
            </div>

            
            <div className="vr" ></div>

            <div className="card">
              <div className="image">
                <img src="https://images.template.net/wp-content/uploads/2016/04/27093503/Sky-Blue-Colored-Car-Wallpaper-for-Download.jpg" alt="" />
              </div>
              <div className="card-text">
                <h3 >Rich Dad Poor </h3>
                <p >Misty Figueroa</p>
                <span >$825.85</span>
              </div>
            </div>

            </div>
                  <hr style={{width:'1008px', marginLeft:'40px'}} />
        </div>

        <div className="box3">
            <div className="container3">
              <div className="card4" >
                <div className="text1">
                  <h5>Up to 20% off</h5>
                  <p>Enjoy The Weekend
                    With Good books
                  </p>
                  <h6>Shop Now</h6>
                </div>
              </div>

              <div className="card5">
                <div className="text2">
                  <h5>Special Offer</h5>
                  <p>20% Off</p>
                  <h6>Shop Now</h6>
                </div>
              </div>
            </div>

              <div className="container4">
                <div className="text3">
                  <h5>Children's Books</h5>
                  <p>Sale 25% Off</p>
                </div>
              </div>
        </div>



      </div>
        
  )
}

export default Home;
