const apiURL = 'https://opentdb.com/api.php?amount=10&type=multiple';
const categoryUrl='https://opentdb.com/api_category.php';
import { flashcardType } from "../types/types";


type questionProps={
        id:number;
        question:string;
        correct_answer:string;
}

export const fetchQuestions = async(
    amount= 10, category = 9
):Promise<flashcardType[]>=>{
    
    try {
        const response = await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&type=multiple`)
        if (!response.ok) {
            throw new Error();
        }  
        const data = await response.json()
        const formattedData=data.results.map((item:questionProps,index:number)=>{
            return{id:index,
                   question:decodeString(item.question),
                   answer:decodeString(item.correct_answer)}
        })
        return formattedData           
    } catch (error) {
        console.error('error', error)
        return[];   
    }
}

export const fetchCategory = async()=>{
    const response = await fetch(categoryUrl);
    const data= await response.json();
    return data.trivia_categories; 
}

const decodeString=(str:string)=>{
    const textArea= document.createElement('textarea');
    textArea.innerHTML =str;
    return textArea.value;
}