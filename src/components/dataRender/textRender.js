import React from 'react';

const TextRender = (text) => {
    let words = text.split(" ")
    let newWords = words.map((word) => {
        if(word.includes("#")){
            word = `<a href="/tag/${word.replace('#','')}">${word}</a>`;
            return word;
        }else{
            return word;
        }
    })
    console.log(newWords)
    return newWords.join(" ");
};

export default TextRender;
