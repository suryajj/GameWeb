

export default function GuessGame({data}: any){
    
    
    const getRandom = (dataLength: any) => {
        return Math.floor(Math.random()*dataLength)
    }

    return(

        <div>
            {getRandom(data.length)}
            <br></br>
            {data.length}
        </div>
    )
}