/*Copyrights (c) 2025 NekshaDeSilva and all other contributors in CatalystAI team.
Originally created for CodeJAM 2025 Comp., Copyrights (c) University of Moratuwa, Sri Lanka.
Licenced with Apache-2.0 contributor's license*/
/*https://www.github.com/nekshadesilva/catalystai*/

console.log('WORKING')

function dynamicSideBar_02(dfg, dfg1H, addvg, gghyt, ythfg){
    function inerfunc(fd_status){
        $('.sidebarX').css({
            'visibility':`${fd_status}`
        })
    }
    return new Promise((resolve, reject)=>{
        dfg = $('body').width();

        dfg1H = $('.header-main').height();
         addvg =$('.header-left-bar-cont').width();
        gghyt = $('.chatDiv-showerLIv').height();
        ythfg = $('.Xcontent').height();


         console.log(addvg)
        
            if(dfg > 0 && addvg > 0 && gghyt > 0){
            resolve('Succeded');
            if(dfg <= 870){
                inerfunc(fd_status = 'hidden');
            }else{
                inerfunc(fd_status = 'visible');
                
                ythfg = $('.Xcontent').height($('body').height() - dfg1H -48);console.log(dfg1H)
                $('.sidebarX').css({
                    'min-width':`${addvg}px`
                })
                $('.sideBarCVX-cendiv').css({
                    'max-width': `${addvg}px`
                })
                $('.box_kjhGIKYTigkg').css({
                    'min-height':`${gghyt}px`
                })
            }
        }else{
            reject('DOM not loaded properly. Reload the page to continue...');
            window.reload();
        }

        
        
    })
}

document.addEventListener('DOMContentLoaded', function(){
    randomeIdeaGen();
    $('html').on('contextmenu', function(eventH){
        eventH.preventDefault();
        
    })
    dynamicSideBar_02()
.then((response)=>{
    console.log(response);
})
.error((error)=>{
    console.log(error);
})
})
function randomeIdeaGen(){
    var obj = { }
    function randomeColorgen(r1,r2,r3){
        r1 = Math.floor(Math.random()*255)
        r2 = Math.floor(Math.random()*255)
        r3 = Math.floor(Math.random()*255)
        return `rgb(${r1},${r2},${r3})`
    }

    var obj ={};
    function addValues() {
        var index  =1 
        let x =  1;
        setInterval(() => 
            {
            text = obj[x]
            writeit(text);
            
            x = (x %  20) + 1; 
            
        }, 4000);
        

        function writeit(text){
                
                function readFrr(){
                    return Math.floor(Math.random()*15) + 16;
                }
                
                
                    if (index < text.length) {
                        if(21>x){
                            $('.popUploaderDynamic-chatwindow span').text(text.substring(0, index + 1)); // Add characters incrementally
                        index++;
                        
                         setTimeout(function(){
                    writeit(text);
                }, readFrr());
                        }
                        
                    }else{
                        index = 1

                       
                        
                    }
                
            
        }
    }
fetch('../assets/static/objects.txt')
    .then(response => response.text())
    .then(data => {
        obj = JSON.parse(data);
        
        addValues();
    })
    .catch(error => {console.error(
        
        'Fatal error:', error

        
    );
    window.reload();
}
    );
    

}
$('.buttonDiv_cvx-cont').on('click', function () {
    const $path = $(this).find('path'); 


    const currentFill = $path.attr('fill');
    if (currentFill === 'var(--defaultColorFont)' || !currentFill) {
        $path.attr('fill', 'rgb(0, 255, 136)'); 
    } else {
        $path.attr('fill', 'var(--defaultColorFont)');
  
    
    }
});

//There should be a mode called "BookMode" right beneath chat bubbles to search for internet and think function

// The colour of the filecontmeasurerr_func_box the icon should be changed as the media inserted to. PDF-red, Image - purple rtc.
function verctorReburnUI(){
    $('.verctorReburnUI').on('click', function(){
    
        $(this).toggleClass('backdeggft_catalystaiUI');
        setTimeout(()=>{
            $(this).removeClass('backdeggft_catalystaiUI');
        },100)
    
    

})
}
verctorReburnUI();

var u76376Status = 0;
function TypingGesturesAdd(div) {
    u76376Status = u76376Status+1;
    if(u76376Status ==1){

    
    $(div).parent().find('div').css({
        'opacity':'100%',
        'position':'relative',
        'display':'inline-block'
    })
    let index = 0;
    const text = $(div).html(); 
    $(div).html(''); 

    function readFrr() {
        return Math.floor(Math.random() * 21) + 20; 
    }




    function innerFunc() {
        if (index < text.length) {
            $(div).html(text.substring(0, index + 1));
            index++;
            setTimeout(innerFunc, readFrr());
        } else {
            $(div).parent().find('div').css({
                'opacity':'0%',
                'position':'fixed'
            });
            u76376Status =0;
            
            
        }
       
    }
    innerFunc();
    
}
else{
    //donothing:)
}
}
function sendDtaGVectorDB(valueR, consType, pauseUntil){
         valueR = $('.inputBoxChatInput-div').val();

     function checkIn(){
        
     }
 }
// var chatObjectDynamic = {
//     doc:{

//     },
//     C1:{
//         userInput:'',
//         chatOutput:''
//     },
//     C2:{
        
//     }
    
// }
function fileUpload() {
    const dynamicVirtualElemtN_Catalyst_eventhandle = $('<input>')
      .attr('type', 'file')
      .attr('accept',  'application/pdf');  // Ensure we accept only PDFs
      
    dynamicVirtualElemtN_Catalyst_eventhandle.on('change', async function (event) {
      const file =     event.target.files[0];
      if (!file) {


        console.warn("User canceled file upload.");
        return;
      }
  
      // ✅ File selected
      console.log("Selected file:", file.name);
  
      // Read the PDF file as ArrayBuffer
      const fileReader = new FileReader();

      //const //non need of useage

      fileReader.onload = async function (e) {
        const typedArray = new  Uint8Array(e.target.result); // Convert the ArrayBuffer to typed array
  
        // Load the PDF using pdf.js
        try {
          const pdf = await pdfjsLib.getDocument({ data: typedArray }).promise;
          let fullText = '';
            
          // Extract text from each page
          for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
            const page = await pdf.getPage(pageNum);
            const textContent = await page.getTextContent();
            const pageText = textContent.items.map(item => item.str).join(' ');
            fullText += pageText + '\n\n';
          }
  
          // Output the extracted text
          console.log("Extracted Text from PDF:", fullText);
          splitIntoChunkObject(text = fullText, chunkSize =555);
          readTextOpenTopicsMain(topicTetxx = fullText);
          
        } catch (error) {
          console.error("Error extracting text from PDF:", error);
          
        }
      };
  
      fileReader.readAsArrayBuffer(file);  
    });
    function splitIntoChunkObject(text, chunkSize = 555) {
  const words = text.split(/\s+/);
  const chunkObject = {};

  let chunkCount = 0;

  for (let i = 0; i < words.length; i += chunkSize) {
    const chunkWords = words.slice(i, i + chunkSize);
    const chunkText = chunkWords.join(' ');

    const pageNumber = getPageNumberFromChunk(chunkText); // optional
    const wordCount = chunkWords.length;

    // Format chunk ID like "chunk01", "chunk02", etc.
    const chunkKey = `chunk${String(chunkCount + 1).padStart(2, '0')}`;

    chunkObject[chunkKey] = {
      text: chunkText,
      pageNumber: pageNumber,
      wordCount: wordCount
    };
    
    chunkCount++;
    
  }
  const chunkArrayForLangChain = Object.entries(chunkObject).map(
        ([chunkKey, chunkData]) => ({
          pageContent: chunkData.text, // This is what gets embedded
          metadata: {
            chunkKey: chunkKey,
            pageNumber: chunkData.pageNumber,
            wordCount: chunkData.wordCount
          }
        })
      );
  console.log(chunkArrayForLangChain)
  return chunkArrayForLangChain;
}
    function readTextOpenTopicsMain(topicTetxx){
        
            const words = topicTetxx.split(/\s+/); // Split by whitespace
            const TopicBasedQuery_CatalystDta = {};
          
            let topicCount = 1;
            
            for (let i = 0; i < words.length; i++) {
                const spacedWord = words.slice(i, i + 7).join(' '); // Check a window of 7 words
                const normalized = spacedWord.replace(/\s+/g, '').toUpperCase();
            
                if (normalized === 'CHAPTER') {
                  // Get 10 words before and 10 after
                  const start = Math.max(i - 10, 0);
                  const end = Math.min(i + 15, words.length);
                  const chapterContext = words.slice(start, end).join(' ');
            
                  TopicBasedQuery_CatalystDta[`chapter_${topicCount}`] = {
                    raw: chapterContext,
                    position: i
                  };
                  
                topicCount++;
              }
            }
            function categorizeChapterPositions(TopicBunch, totalWordCounts) {
                for (const chapterKey in TopicBunch) {
                  const chapter = TopicBunch[chapterKey];
                  const position = chapter.position;
              
                  // Define relative positions
                  let section = 'Starting of the book';
                  if (position <= totalWordCounts * 0.33) {
                    section = 'Start';
                  } else if (position <= totalWordCounts * 0.66) {
                    section = 'Middle of the Book';
                  } else {
                    section = 'End of the book';
                  }
              
                  chapter.section = section;
                  
                }
              
                return TopicBasedQuery_CatalystDta;
              }
              
            categorizeChapterPositions(TopicBunch = TopicBasedQuery_CatalystDta  , totalWordCounts = words.length)
            function convertChaptersToLangChainFormat(chapterObj) {
                const totalChapters = Object.keys(chapterObj).length;
              
                return Object.entries(chapterObj).map(([chapterKey, chapterData], index) => {
                  let section = "Middle of the given electronic document";
                  if (index === 0) section = "Start of the given electronic document";
                  else if (index === totalChapters - 1) section = "End of the given electronic document -- maybe the last page";
              
                  return {
                    pageContent: chapterData.raw,
                    metadata: {
                      chapterKey,
                      section,
                      position: chapterData.position
                    }
                  };
                });
              }
              
            console.log(convertChaptersToLangChainFormat(chapterObj = TopicBasedQuery_CatalystDta));
            return convertChaptersToLangChainFormat(chapterObj = TopicBasedQuery_CatalystDta);
            
          }
    
       
// Optional page number extractor
function getPageNumberFromChunk(chunk) {
  const match = chunk.match(/-\s*(\d+)\s*-/); // example: "-- 78 --"
  return match ? parseInt(match[1]) : null;
}

    dynamicVirtualElemtN_Catalyst_eventhandle.click();
  }
  
function dynamicChatBubble_handelr_fcdn(contentFetched, docValidator, contextFileMt_size, contextFileMt_name){
    var parentConetert =document.createElement('div');
    document.querySelector('.chatContent').append(parentConetert)
    parentConetert.className = 'chatContentCVX_block';
    
const chatContent = parentConetert;
chatContent.style.alignItems = 'flex-end';

const bubble = document.createElement('div');
bubble.className = 'chatBubble_payLoad-APP';


const fileDiv = document.createElement('div');
fileDiv.className = 'addedFiles_mediaProd';

if(docValidator == 1){
const svgIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svgIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
svgIcon.setAttribute('width', '16');
svgIcon.setAttribute('height', '16');
svgIcon.setAttribute('fill', 'currentColor');
svgIcon.classList.add('bi', 'bi-file-richtext-fill');
svgIcon.setAttribute('viewBox', '0 0 16 16');
const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
path.setAttribute('d', 'M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM7 4.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm-.861 1.542 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047l1.888.974V7.5a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V7s1.54-1.274 1.639-1.208zM5 9h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z');
svgIcon.appendChild(path);
fileDiv.appendChild(svgIcon);
const fileText = document.createElement('div');
fileText.className = 'filecontmeasurerr_func_box';

const fileName = document.createElement('span');
fileName.className = 'q0830_chatcONTETR_name_mes';
fileName.textContent = contextFileMt_name;

const fileSize = document.createElement('span');
fileSize.className = 'q0830_chatcONTETR_size_mes';
fileSize.textContent = contextFileMt_size;

fileText.appendChild(fileName);
fileText.appendChild(fileSize);
fileDiv.appendChild(fileText);
bubble.appendChild(fileDiv);
}else{
    fileDiv.remove();
}





const messageDiv = document.createElement('div');
messageDiv.className = 'recurrent_ChatContent_bubble';

const msgSpan = document.createElement('span');
msgSpan.textContent = contentFetched;

messageDiv.appendChild(msgSpan);

bubble.appendChild(messageDiv);
//$('.deepsearch_button-websearch-user-PRT').on('click', function (event){alert(event)}
const postDiv = document.createElement('div');
postDiv.className = 'recurrentUserchatbubbleContent_poxt';


const button = document.createElement('div');
button.className = 'chatBubble-button deepsearch_button-websearch-user-PRT verctorReburnUI';

const buttonSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
buttonSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
buttonSvg.setAttribute('viewBox', '0 0 16 16');
const globePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
globePath.setAttribute('d', 'M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z');
buttonSvg.appendChild(globePath);
button.appendChild(buttonSvg);

const buttonText = document.createElement('span');
buttonText.textContent = 'Web Search';
button.appendChild(buttonText);

postDiv.appendChild(button);
bubble.appendChild(postDiv);

chatContent.appendChild(bubble);
//end-credit-functions

verctorReburnUI();

}