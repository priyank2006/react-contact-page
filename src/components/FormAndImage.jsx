import "../TwoColumnContainer.css";
import "../themify-icons.css";


const FormAndImage = () => {
    return (
        <div class="two-column-container">
            <div className="container-1">
                <div className="btn-group">
                    <button> <i class="ti-email"></i> Support Chat </button>
                    <button> <i class="ti-headphone"></i> Call Us </button>
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
                        <div className="input-container">                            <label htmlFor="msg"> Message </label>
                            <textarea name="msg" id="msg" cols="30" rows="10"></textarea>
                        </div>
                        <div className="input-container">
                            <div className="btn-group">
                                <button class="mt-5"> <i class="ti-check"></i> Submit </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
            <div className="container-2">
                <img src="/support.svg" alt="" />
            </div>
        </div >
    )
}

export default FormAndImage