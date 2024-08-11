import { Component } from "react";
import './index.css';

class FiltersGroup extends Component {
    render() {
        const categories = [
            {
                title: "IDEAL FOR",
                options: ["All","Men", "Woman", "Baby & Kids"],
            },
            {
                title: "OCCASION",
                options: ["All","Men", "Woman", "Baby & Kids"],
            },
            {
                title: "WORK",
                options: ["All","Men", "Woman", "Baby & Kids"],
            },
            {
                title: "FABRIC",
                options: ["All","Men", "Woman", "Baby & Kids"],
            },
            {
                title: "SEGMENT",
                options: ["All","Men", "Woman", "Baby & Kids"],
            },
            {
                title: "SUITABLE FOR",
                options: ["All","Men", "Woman", "Baby & Kids"],
            },
            {
                title: "RAW MATERIALS",
                options: ["All","Men", "Woman", "Baby & Kids"],
            },
            {
                title: "PATTERN",
                options: ["All","Men", "Woman", "Baby & Kids"],
            },
        ];

        return (
            <div>
                {categories.map((category, index) => (
                    <div key={index}>
                        <p>{category.title}</p>
                        {category.options.map((option, idx) => (
                            <div key={idx} className="checkbox-container">
                                <input
                                    id={idx}
                                    type="checkbox"
                                    className="checkbox"
                                />
                                <label htmlFor={idx}>
                                    {option} 
                                </label> 
                            </div>
                        ))}
                        <hr />
                    </div>
                ))}
            </div>
        );
    }
}

export default FiltersGroup;
