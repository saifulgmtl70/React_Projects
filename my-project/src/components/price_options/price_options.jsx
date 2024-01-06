import PriceOption from "../priceOption/priceOption";


const PriceOptions = () => {

    const pricesOptions = [
        {
          "id": 1,
          "name": "Basic Membership",
          "features": [
            "Access to gym facilities",
            "Cardio and strength equipment",
            "Locker room access"
          ],
          "price": 29.99
        },
        {
          "id": 2,
          "name": "Premium Membership",
          "features": [
            "Access to gym facilities",
            "Cardio and strength equipment",
            "Locker room access",
            "Group fitness classes",
            "Personal trainer sessions (2/month)"
          ],
          "price": 49.99
        },
        {
          "id": 3,
          "name": "Family Membership",
          "features": [
            "Access to gym facilities for the whole family",
            "Cardio and strength equipment",
            "Locker room access",
            "Group fitness classes"
          ],
          "price": 79.99
        },
        {
          "id": 4,
          "name": "Student Membership",
          "features": [
            "Access to gym facilities",
            "Cardio and strength equipment",
            "Locker room access",
            "Valid student ID required"
          ],
          "price": 19.99
        }
      ];
      
    
    

     



    return (
        <div className="px-12 mb-20">
            <h2 className="text-3xl text-center font-bold mt-5 mb-12">Best Prices in the Town</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    pricesOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;