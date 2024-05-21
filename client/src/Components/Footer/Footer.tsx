const Footer = () => {
    return (
        <footer className="">
            <div className="md:grid grid-cols-3 gap-10 p-10">
                <div className="flex justify-between ">
                <div >
                    <h3 className="font-semibold text-lg">Category</h3>
                    <p>Women</p>
                    <p>Women</p>
                    <p>Women</p>
                    <p>Women</p>
                </div>
                <div>
                    <h3 className="font-semibold text-lg">Links</h3>
                    <p>Women</p>
                    <p>Women</p>
                    <p>Women</p>
                    <p>Women</p>
                    <p></p></div></div>
                <div>
                
                    <h3 className="font-semibold text-lg">About</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos possimus quidem delectus aut quae totam nesciunt eveniet minus ducimus, commodi in laborum. Numquam magni corporis in laudantium consequuntur fugit voluptas.</p></div>
                <div>
                    <h3 className="font-semibold text-lg">Contact</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt nam provident aperiam neque exercitationem? Excepturi natus alias eaque recusandae id? Quidem quam dignissimos harum nulla temporibus officiis distinctio maiores illo.</p></div>

            </div>
            <footer className="flex md:flex-row flex-col md:justify-around justify-between items-center ">
                <div className="flex md:flex-row flex-col items-center justify-center"><h1 className="text-blue-500 text-2xl">Lamastore</h1>
                    <p className="text-xs pt-3">© Copyright 2024, All Right Reserved</p></div>
                <div>
                    <img src="https://content.invisioncic.com/p289038/monthly_2022_10/Payment-methods.png.2b9ba23475aaa15189f555f77ec3a549.png" alt="" width="300px" />
                </div>

            </footer>
        </footer>)
}
export default Footer;
