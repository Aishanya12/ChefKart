export default function Popular(props){
   
    return(
        <div className="popularContainer">
         <div className="Popular">
            <h1> Popular Dishes</h1>
            <div className="biryani">
                {
                    props?.data?.map((item)=>{
                        return(
                            <div className="bir">
                            <p> {item.name}</p>
                            </div>
                        )
                        
                    })
                }
            
        </div>
            
            
        </div>
    </div>
    );
}