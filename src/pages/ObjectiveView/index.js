import React,{useState,useEffect} from 'react';
import Objective from './../../components/myComponents/Objective'
import {PageArea,Loading} from './styled.js';
import useApi from '../../helpers/Api';
import Spinner from 'react-spinner-material';
import swal from 'sweetalert';

const ObjectiveView=()=>{
    const [objectives,setObjectives]=useState([]);
    const [loading,setLoading]=useState(true);

    const [addObjective,setAddObjective]=useState(false);
    const api=useApi(); 

    useEffect(()=>{
        const getAllObjectives=async ()=>{
            let json=await api.getObjectives();
            setObjectives(json.data);
            setLoading(false);
        }

        getAllObjectives();
    },[]);

 
    return (
        <>
            {loading &&
                <Loading>
                    <Spinner size={120} spinnercolor={"#333"} visible={true} />
                </Loading>
            }
            {loading===false &&
                <PageArea>
                    <h2>Objetivos</h2>
                    {objectives.map((item)=>{
                        return(
                            <Objective 
                                key={item.id}
                                id={item.id}
                                title={item.title} 
                                type={item.type}
                                level={item.level}
                                done={item.done}
                            /> 
                        )
                    })}

                    {addObjective &&   
                        <Objective add/> 
                    }
                    <div className="objective__btnAdd" onClick={()=>{setAddObjective(!addObjective)}}>
                        {addObjective?'Cancelar':'Adicionar'} 
                    </div>
                </PageArea>
            }
        </>
    )
}

export default ObjectiveView;