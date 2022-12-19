function x(){
    var x = document.querySelector("#branch").value;
    var t = document.querySelector("#topic");
    switch(x){
        case 'ns':
            t.innerHTML = '<option value="ns">All</option><option value="decimal">Decimal</option><option value="binary">Binary</option><option value="hexdecimal">Hexadecimal</option><option value="octal">Octal</option><option value="conversion">Conversion</option>'
            break;
        case 'geometry':
            t.innerHTML = '<option value="geometry">All</option><option value="basic-geo">Basic concepts of geometry</option><option value="shapes">Shapes</option><option value="measurements">Measurements</option><option value="peri-area">Perimeter & area</option><option value="angles">Angles</option><option value="circles">Circles</option><option value="obj-nets">3D objects & nets</option><option value="triangles">Triangles</option><option value="quadrilaterals">Quadrilaterals</option><option value="para-lines">Parallel lines & transversals</option><option value="co-ordinate-geo">Co-ordinate geometry</option><option value="mensuration">Mensuration</option><option value="trigo">Trigonometry</option><option value="str-lines">Straight lines</option><option value="conic">Conic sections</option><option value="pstr-lines">Pair of straight lines</option>'
            break;
        case 'algebra':
            t.innerHTML = '<option value="algebra">All</option><option value="basic-alg">Basic</option><option value="poly">Polynomials</option><option value="eq-one">Equation in one variable</option><option value="leq-two">Linear equation in two variable</option><option value="sets">Sets & relations</option><option value="series">Sequence & series</option><option value="permu-combi">Permutation & combinations</option><option value="determinants">Determinants</option><option value="matrices">Matrices</option><option value="eq">Equations</option>'
            break;
        case 'financial':
            t.innerHTML = '<option value="financial">All</option><option value="prof-loss">Profit-loss</option><option value="banks-si">Banks & Simple interest</option><option value="disc-comm">Discount & commission</option><option value="ci">Compound interest</option><option value="f-plan">Financial planning</option>'
            break;
        case 'calculus':
            t.innerHTML = '<option value="calculus">All</option><option value="func">Functions</option><option value="limit">Limits</option><option value="continuity">Continuity</option><option value="differentiation">Differentiation</option><option value="integration">Integration</option>'
            break;
        case 'statistics':
            t.innerHTML = '<option value="statistics">All</option><option value="pictographs">Pictographs</option><option value="patterns">Patterns</option><option value="graphs">Graphs</option><option value="stats">Statistics</option><option value="mod">Measures of dispersion</option>'
            break;
        case 'logic':
            t.innerHTML = '<option value="logic">All</option><option value="probability">Probability</option><option value="m-logic">Mathematical logic</option><option value="p-distribution">Probability distribution</option><option value="b-distribution">Binomial Distibution</option><option value="moi">Method of induction</option><option value="bt">Binomial Theorem</option>'
            break;
        case 'physics':
            t.innerHTML = '<option value="physics">All</option><option value="vectors">Vectors</option><option value="line-plane">Line & plane</option><option value="differential-eq">Differential equations</option>'
            break;
        case 'others':
            t.innerHTML = '<option value="other">All</option><option value="lpp">Linear programming</option>'
            break;
        default:
            t.innerHTML = '<option value="basics">All</option><option value="counting">Counting</option><option value="no_names">Number & names</option><option value="placevalue-expand">Place value & expand</option><option value="before-after">Before-after</option><option value="asc-desc">Ascending-Descending</option><option value="add">Add</option><option value="subtract">Subtract</option><option value="multiply">Multiply</option><option value="divide">Divide</option><option value="card-ord">Cardinal-ordinal</option><option value="compare">Comparison</option><option value="fraction">Fractions</option><option value="mul-fac">Multiples-Factors</option><option value="dec-frac">Decimal fractions</option><option value="divisibility">Divisibility</option><option value="hcf-lcm">HCF-LCM</option><option value="ratio">Ratio-proportion</option><option value="indices">Indices</option><option value="dir-inv">Direct-inverse proportion</option>'
            break;
    }
    z();
}

function z(){
    var n = document.querySelector("#topic").value;
    var y = document.querySelector("#frame");
    switch(n){
        case 'counting':
            y.src = "Files/5.html";
            break;
        case 'no_names':
            y.src = "Files/5.html";
            break;
        case 'placevalue-expand':
            y.src = "Files/5.html";
            break;    
        case 'before-after':
            y.src = "Files/5.html";
            break;
        case 'asc-desc':
            y.src = "Files/56.html";
            break;
        case 'add':
            y.src = "Files/6.html";
            break;
        case 'subtract':
            y.src = "Files/6.html";
            break;
        case 'multiply':
            y.src = "Files/6.html";
            break;
        case 'divide':
            y.src = "Files/6.html";
            break;
        case 'card-ord':
            y.src = "Files/6.html";
            break;
        case 'compare':
            y.src = "Files/7.html";
            break;
        case 'fraction':
            y.src = "Files/789.html";
            break;
        case 'mul-fac':
            y.src = "Files/10.html";
            break;
        case 'dec-frac':
            y.src = "Files/11.html";
            break;
        case 'divisibility':
            y.src = "Files/12.html";
            break;
        case 'hcf-lcm':
            y.src = "Files/1213.html";
            break;
        case 'ratio':
            y.src = "Files/1415.html";
            break;
        case 'indices':
            y.src = "Files/15.html";
            break;
        case 'dir-inv':
            y.src = "Files/16.html";
            break;
        case 'decimal':
            y.src = "Files/decimalnumbersystem.html";
            break;
        case 'binary':
            y.src = "Files/binarynumbersystem.html";
            break;
        case 'hexdecimal':
            y.src = "Files/hexadecimal&octalnumbersystem.html";
            break;
        case 'octal':
            y.src = "Files/hexadecimal&octalnumbersystem.html";
            break;
        case 'conversion':
            y.src = "Files/conversion.html";
            break;
        case 'basic-geo':
            y.src = "Files/basicconceptsingeometry.html";
            break;
        case 'shapes':
            y.src = "Files/shapes.html";
            break;
        case 'measurements':
            y.src = "Files/measurements.html";
            break;
        case 'peri-area':
            y.src = "Files/perimeterandarea.html";
            break;
        case 'angles':
            y.src = "Files/angles.html";
            break;
        case 'circles':
            y.src = "Files/circles.html";
            break;
        case 'obj-nets':
            y.src = "Files/3dobjectsandnets.html";
            break;
        case 'triangles':
            y.src = "Files/triangles.html";
            break;
        case 'quadrilaterals':
            y.src = "Files/quadrilaterals.html";
            break;
        case 'para-lines':
            y.src = "Files/parallellines&transversals.html";
            break;
        case 'co-ordinate-geo':
            y.src = "Files/coordinategeometry.html";
            break;
        case 'mensuration':
            y.src = "Files/mensuration.html";
            break;
        case 'trigo':
            y.src = "Files/trigonometry.html";
            break;
        case 'str-lines':
            y.src = "Files/straightlines.html";
            break;
        case 'conic':
            y.src = "Files/conicsections.html";
            break;
        case 'pstr-lines':
            y.src = "Files/pairofstraightlines.html";
            break;
        case 'basic-alg':
            y.src = "Files/basicalgebra.html";
            break;
        case 'poly':
            y.src = "Files/polynomials.html";
            break;
        case 'eq-one':
            y.src = "Files/equationinonevariable.html";
            break;
        case 'leq-two':
            y.src = "Files/linearequationintwovariable.html";
            break;
        case 'sets':
            y.src = "Files/sets&relations.html";
            break;
        case 'series':
            y.src = "Files/sequence&series.html";
            break;
        case 'permu-combi':
            y.src = "Files/permutation&combination.html";
            break;
        case 'determinants':
            y.src = "Files/determinants.html";
            break;
        case 'matrices':
            y.src = "Files/matrices.html";
            break;
        case 'eq':
            y.src = "Files/equations.html";
            break;
        case 'prof-loss':
            y.src = "Files/profitloss.html";
            break;
        case 'banks-si':
            y.src = "Files/banks&simpleinterest.html";
            break;
        case 'disc-comm':
            y.src = "Files/discount&commission.html";
            break;
        case 'ci':
            y.src = "Files/compoundinterest.html";
            break;
        case 'f-plan':
            y.src = "Files/financialplanning.html";
            break;
        case 'func':
            y.src = "Files/functions.html";
            break;
        case 'limit':
            y.src = "Files/limits.html";
            break;
        case 'continuity':
            y.src = "Files/continuity.html";
            break;
        case 'differentiation':
            y.src = "Files/differentiation.html";
            break;
        case 'integration':
            y.src = "Files/integration.html";
            break;
        case 'pictographs':
            y.src = "Files/pictographs&patterns.html";
            break;
        case 'patterns':
            y.src = "Files/pictographs&patterns.html";
            break;
        case 'graphs':
            y.src = "Files/graphs.html";
            break;
        case 'stats':
            y.src = "Files/statistics4.html";
            break;
        case 'mod':
            y.src = "Files/measuresofdispersion.html";
            break;
        case 'probability':
            y.src = "Files/probability.html";
            break;
        case 'm-logic':
            y.src = "Files/mathematicallogic.html";
            break;
        case 'p-distribution':
            y.src = "Files/probabilitydistribution.html";
            break;
        case 'b-distribution':
            y.src = "Files/binomialdistribution.html";
            break;
        case 'moi':
            y.src = "Files/methodofinduction&binomialtheorem.html";
            break;
        case 'bt':
            y.src = "Files/methodofinduction&binomialtheorem.html";
            break;
        case 'vectors':
            y.src = "Files/vectors.html";
            break;
        case 'line-plane':
            y.src = "Files/lineandplane.html";
            break;
        case 'differential-eq':
            y.src = "Files/differentialequations.html";
            break;
        case 'lpp':
            y.src = "Files/linearprogramming.html";
            break;
        case 'basics':
            y.src = "Files/basics.html";
            break;
        case 'ns':
            y.src = "Files/numbersystems.html";
            break;
        case 'geometry':
            y.src = "Files/geometry.html";
            break;
        case 'algebra':
            y.src = "Files/algebra.html";
            break;
        case 'financial':
            y.src = "Files/financial.html";
            break;
        case 'statistics':
            y.src = "Files/statistics.html";
            break;
        case 'calculus':
            y.src = "Files/calculus.html";
            break;
        case 'logic':
            y.src = "Files/logic.html";
            break;
        case 'physics':
            y.src = "Files/physics.html";
            break;
        case 'other':
            y.src = "Files/linearprogramming.html";
            break;
    }
}