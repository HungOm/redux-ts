import {useState} from 'react';
// import { useDispatch } from 'react-redux';
// import { actionCreators } from '../state';
import { useActions } from '../hooks/useActions';
import { useSelector } from 'react-redux';

const RepositoriesList:React.FC = ()=>{
    const [term,setTerm] = useState('');
    // const dispatch = useDispatch();
    const {searchRepositories} = useActions();
    const {data,error,loading} = useSelector((state:any)=>state.repositories)
    
    const onSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        // dispatch(actionCreators.searchRepositories(term))
        searchRepositories(term);

    }
    return<div>
        <form onSubmit={onSubmit}>
            <input value={term} onChange={(e)=>setTerm(e.target.value)}/>
            <button>Search</button>
        </form>
    </div>
}

export default RepositoriesList;