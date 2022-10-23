<script>
    let state = 0;

    function increment() {
        state++;
        console.log('state', state);
    }

    $: doubleState = state * 2;


</script>
<h2>Display of Counter</h2>
<h3>{doubleState}</h3>
<button on:click={increment} >Increment</button>
