import './ItemListContainer.css';

function ItemListContainer({saludo}) {
    return (
        <div className="saludo__container">
            <h1>
                {saludo}
            </h1>
        </div>
    );
}

export default ItemListContainer;