import Card from "../Card";

const OverviewPage = () => {
    return ( 
        <div className="mainContentWrapper">
            <h1>Overview Page</h1>
         <div className="cardWrapper">
           <Card/>
           <Card/> 
           <Card/> 
           <Card/>   
         </div> 
        </div>
     );
}
 
export default OverviewPage;