

const getSentenceFragment = (offset = 0) => {
    const pageSize = 3
    const sentence = [...'hello world']
    return {
      data: sentence.slice(offset, offset + pageSize),
      nextPage: offset + pageSize < sentence.length ? offset + pageSize : null
    }
  }
  
  const getSentence = (sentence, offset) => {
    
    // let a = getSentenceFragment(0)
    // sentenceList = sentenceList.concat(a.data)
    // console.log(a)

    // let b = getSentenceFragment(3)
    // sentenceList = sentenceList.concat(b.data)
    // console.log(b)


    // let c = getSentenceFragment(6)
    // sentenceList = sentenceList.concat(c.data)
    // console.log(c)

    // let d = getSentenceFragment(9)
    // sentenceList = sentenceList.concat(d.data)
    // console.log(d)

    sentenceList = []    
    currentVal = getSentenceFragment(3)

    while( currentVal.nextPage !== null ) {
        sentenceList = sentenceList.concat(currentVal.data) 
        console.log(sentenceList)
    }
    
    
    //     //   currentVal = getSentenceFragment(currentVal.nextPage)
    
    // }
    
    
    return sentenceList  
  }
  
//   console.log(currentVal) 
  console.log(getSentence([], 0).join(''))