import React from 'react';
const LaptopCard = ({laptop}) => {//jsx version
// function LaptopCard(props) {//js version
/*     const handleClick = (event, param) => {// this web page saved me in this problem https://bobbyhadz.com/blog/react-onclick-pass-event-and-parameter.
        if(param==200){
            window.location.href='./page2';
        }
      }; */
    //   const { laptop } = props;
    //   console.log(props);
    return (
        // <div className= "laptop" onClick={event => handleClick(event, laptop.id)}>
        <div className= "laptop">
            <div>
                <img className={laptop.id!==200?"lImage":"QuestionImage"} src={require(`${laptop.imageSrc}`)} alt={laptop.lTitle}></img>

            </div>
             <div>
                <p>{laptop.lTitle}</p>
                <p className="productDetail">{laptop.lDetail}</p>

            </div>
        </div>


    );
}

function doSomethingHere(){
    console.log("reached here2");
}

export default LaptopCard;