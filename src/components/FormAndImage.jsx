import "../TwoColumnContainer.css";


const FormAndImage = () => {
    return (
        <div class="two-column-container">
            <div className="container-1">
                <div className="btn-group">
                    <button> Support Chat </button>
                    <button> Call Us </button>
                </div>
                <div>
                    <form>
                        <div className="input-container">
                            <label htmlFor="name"> Name </label>
                            <input type="text" id="name" name="name" />
                        </div>
                        <div className="input-container">
                            <label htmlFor="email"> Email </label>
                            <input type="text" id="email" name="email" />
                        </div>
                        <div className="input-container">
                            <label htmlFor="msg"> Message </label>
                            <textarea name="msg" id="msg" cols="30" rows="10"></textarea>
                        </div>
                    </form>
                </div>
            </div>
            <div className="container-2">
                <img src="/support.svg" alt="" />
            </div>
        </div>
    )
}

export default FormAndImage