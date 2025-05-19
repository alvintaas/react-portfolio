
function GroceryList(props) {

    const { category } = props.category;
    const itemList = props.items;
  
/*  const fruits = [{id: 1, name:'Apples', calories: 95},
                    {id: 2, name:'Bananas', calories: 105},
                    {id: 4, name:'Dragonfruit', calories: 60},
                    {id: 3, name:'Coconut', calories: 283},
                ];
*/
  
                //fruits.sort((a, b) => a.name.localeCompare(b.name));// ALPHABTICAL ORDER
                //fruits.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE ALPHABTICAL ORDER
                //fruits.sort((a, b) => a.calories - b.calories);// CALORIES ORDER

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

    const listItems = itemList.map(item => <li key={item.id}>
                                                {item.name}: &nbsp; 
                                                <b>{item.calories}</b></li>);

    return (<>
                <h3 className="list-category">{category}</h3>
                <ul className="list-items">{listItems}</ul>
            </>);
}

export default GroceryList;