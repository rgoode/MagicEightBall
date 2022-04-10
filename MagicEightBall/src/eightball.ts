export function PredictTheFuture(){
    const question: string = "Ask a question"
    console.log(question)


interface Response{
    yes: string,
    no: string,
    maybe: string,
    askLater: string,
}

const response: Array<Response> = [
    
    {
        yes: 'Yes!',
        no: 'No.',
        maybe: 'Iunno',
        askLater: 'Try Again Later',
    },
];

function randomResponse(response: Response) {
    let text = "";
    const Responses = [ "Yes!", "No.", "Iunno", "Try Again Later"];
    let responseIndex = Responses.length;

    for(var i = 0; i < length; i++){
        text += Responses.at(Math.floor(Math.random()*responseIndex));
    }
    return text;
  

}

}




    

