const OverviewCard = ({data}) => {
    return ( 
        <div className="overviewCard">
          {/* <img src={fakePerson.picture.large} alt="profile"/> */}
          <div className="overviewImage">

          </div>
          <div className="overviewCardInfo">
            <h4>
                {data.forenames} {data.surname}
            </h4>
           <div className="overviewCardData"> 
                <p>{data.dateOfBirth}</p>
                <p>{data.sex}</p>
                <p>{data.placeOfBirth}</p>
            </div>
            <p>{data.homeAddress}</p>
          </div>
        
      </div>
     );
}
 
export default OverviewCard;