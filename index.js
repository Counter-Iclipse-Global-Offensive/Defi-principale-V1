tracerPos = ['zero','one','two','three']
let nbTracer = 0;

function nextStep() {    
    document.getElementById("tracer").classList.add(tracerPos[++nbTracer])
 }