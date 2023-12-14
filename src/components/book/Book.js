
 import PropTypes from "prop-types";
            function Book({ bookProps }) {
                let { price, volumeInfo: {title, authors, description} } = bookProps;
            
                return(
                    <div>
                        <h1>{title === "" ? "No Title" : title}</h1>
                        <ul>
                            {
                                authors
                                ? (
                                    authors.map(author => (
                                        <li key={author}>{author}</li>
                                    ))
                                )
                                : "No Authors Listed"
                            }
                        </ul>
                        <p>{description ? description : "No description Provided"}</p>
                        <p>{price ? `£${price}`: "No Price Available"}</p>
                        {/* <button onClick={() => addBook(title)}>Add +</button> */}
                    </div>
                )
            }
            
            Book.propTypes = {
                price: PropTypes.number.isRequired,
                volumeInfo: PropTypes.shape({
                    title: PropTypes.string.isRequired,
                    authors: PropTypes.array.isRequired,
                    description: PropTypes.string
                })
            }
            
            Book.defaultProps = {
                price: "No Price Available"
            }
            
            export default Book;
            
        
            
            
            
            