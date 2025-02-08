import React, { useState, useEffect } from 'react'
import { loadCategories } from "../services/category-service";
import {ListGroup, ListGroupItem} from 'reactstrap'
import { Link } from 'react-router-dom';
function CategorySideMenu() {
    const [categories,setCategories]=useState(null)

    useEffect(()=>{
        loadCategories().then(data=>{
            setCategories(data)
        }).catch(error=>{
            console.log(error)
        })
    },[])
  return (
    <ListGroup>
        <ListGroupItem disabled>--Select Category--</ListGroupItem>
        <ListGroupItem tag={Link} to='/feed' action={true}>All Blogs</ListGroupItem>
        {
            // console.log(categories)
            categories && (
                categories.map(category=>{
                    return <ListGroupItem key={category.categoryId} tag={Link} to={`/category/${category.categoryId }`} className='shadow-0' action={true}>
                        {category.categoryTitle}
                    </ListGroupItem>
                })
            )
        }
    </ListGroup>
  )
}

export default CategorySideMenu