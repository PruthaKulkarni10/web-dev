function Navigate(){
    return(
        <div class="bg-slate-800">
            <ul>
                <nav class="flex justify-between items-center w-90% bg-slate-700 mx-auto">
                    <div><img src="https://media.istockphoto.com/id/1353945206/vector/growing-graph-icon-on-blue-background-flat-design-with-long-shadow.jpg?s=612x612&w=0&k=20&c=4TStcgn7tjF61VBtagdLG5NAfhKHCxZGKuSt3C3UElo=" width={100} alt="Grow" class="rounded-full"></img></div>
                    <div class="text-white">
                        <ul class="flex justify-between items-center w-90% gap-4">
                        <li><a href="#">Home </a></li>
                        <li><a href="#">About </a></li>
                        <li><a href="#">Contact Us </a></li>
                        <li><a href="#">Read more </a></li>
                        </ul>
                    </div>
                    <div> 
                        <button class="bg-blue-700 rounded-full text-white px-7 py-2 hover:bg-blue-600">Sign in</button>
                    </div>
                    
                </nav>
            </ul>
        </div>

    );
}
export default Navigate;

