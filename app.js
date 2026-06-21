const btn = document.getElementById("playBtn");
const sectionText = document.getElementById("section");


const analyser = new Tone.Analyser("fft",64);
Tone.Destination.connect(analyser);


const synth = new Tone.PolySynth(Tone.Synth,{
    oscillator:{
        type:"sawtooth"
    }
}).toDestination();

const kick = new Tone.MembraneSynth().toDestination();

const snare = new Tone.NoiseSynth({
    noise:{type:"white"},
    envelope:{
        attack:0.001,
        decay:0.2,
        sustain:0
    }
}).toDestination();

const hat = new Tone.MetalSynth({
    frequency:250,
    envelope:{
        attack:0.001,
        decay:0.03,
        release:0.01
    }
}).toDestination();

Tone.Transport.bpm.value = 145;


const sections = ["INTRO","VERSE","HOOK","DROP"];

const patterns = [
[
["C4","Eb4","G4"],
["Ab3","C4","Eb4"]
],
[
["C4","Eb4","G4"],
["Bb3","D4","F4"]
],
[
["F4","A4","C5"],
["G4","Bb4","D5"]
],
[
["Eb4","G4","Bb4"],
["C4","G4","C5"]
]
];

let currentSection=0;
let chordIndex=0;

Tone.Transport.scheduleRepeat((time)=>{

    synth.triggerAttackRelease(
        patterns[currentSection][chordIndex],
        "2n",
        time
    );

    chordIndex++;
    chordIndex%=2;

},"2n");

Tone.Transport.scheduleRepeat((time)=>{

    kick.triggerAttackRelease("C1","8n",time);

},"4n");

Tone.Transport.scheduleRepeat((time)=>{

    snare.triggerAttackRelease("16n",time);

},"2n","0:2");

Tone.Transport.scheduleRepeat((time)=>{

    hat.triggerAttackRelease("32n",time);

},"8n");

Tone.Transport.scheduleRepeat(()=>{

    currentSection++;

    if(currentSection>3)
        currentSection=0;

    sectionText.innerText = sections[currentSection];

},"8m");



const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 1100;
canvas.height = 280;

let animationId = null;

function drawVisualizer(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    const values = analyser.getValue();

    const width = canvas.width / values.length;

    values.forEach((v,i)=>{

        let percent = (v + 140)/140;

        let h = canvas.height * percent;

        ctx.fillStyle = "#00ff66";

        ctx.fillRect(
            i*width,
            canvas.height-h,
            width-4,
            h
        );

    });

    animationId=requestAnimationFrame(drawVisualizer);

}

function stopVisualizer(){

    cancelAnimationFrame(animationId);

    ctx.clearRect(0,0,canvas.width,canvas.height);

}


let playing=false;

btn.onclick = async ()=>{

    await Tone.start();

    if(!playing){

        Tone.Transport.start();

        drawVisualizer();

        playing=true;

        btn.innerHTML="⏹ STOP";

    }else{

        Tone.Transport.stop();

        stopVisualizer();

        playing=false;

        btn.innerHTML="▶ PLAY";

    }

};
