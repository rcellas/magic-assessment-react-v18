
export async function useCard() {
    const response = await fetch("https://api.magicthegathering.io/v1/cards");
    try{
        const data = await response.json();
        return data.cards;
    }
    catch(error){
        console.error("Mensaje de error: ", error)
    }
}

export default useCard