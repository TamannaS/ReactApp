import React from 'react';
import EachItem from './Each_item'

const ResponseList=(props)=>{
    var Linkone=props.Links["2015-09-07"];
    if (typeof Linkone === 'undefined')
    {
        //console.log('outside if response list:',Linkone);
        return(
            <div>You will be able to see the Result Here</div>        
        )       
        
    }
    const Item = Linkone.map((Link)=>{
            return <EachItem key={Link.neo_reference_id} Link={Link}/>
        })
       //console.log('in response list:',Linkone[1]);
       return(
        <div>{Item}</div>        
    )
    
}

export default ResponseList;