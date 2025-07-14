import { Formik } from "formik";
import React from "react";
import './editJournalForm.css'
import SendIcon from '@mui/icons-material/Send';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { setJournal_from } from '../../../Redux/tradingJournalSlice';
import { useDispatch } from "react-redux";


export const Edit_JournalForm = () => {
    const dispatch = useDispatch();
const stockName = [
  { value: '1', label: 'Stock One' },
  { value: '2', label: 'Stock Two' },
  { value: '3', label: 'Stock Three' },
  { value: '4', label: 'Stock Four' },
  { value: '5', label: 'Stock Five' },
  { value: '6', label: 'Stock Six' },
  { value: '7', label: 'Alpha Corp' },
  { value: '8', label: 'Beta Industries' },
  { value: '9', label: 'Gamma Limited' },
  { value: '10', label: 'Delta Holdings' },
  { value: '11', label: 'Machinery Ltd' },
  { value: '12', label: 'Tech Innovations' },
  { value: '13', label: 'Future Investments' },
  { value: '14', label: 'Smart Solutions' },
  { value: '15', label: 'Global Ventures' },
  { value: '16', label: 'Dynamic Traders' },
  { value: '17', label: 'Prime Stocks' },
  { value: '18', label: 'Pioneer Trading' },
  { value: '19', label: 'Ace Traders' },
  { value: '20', label: 'NextGen Corp' }
];

    return (
        <div className="Edit_journal_form_main">
            <div className="Edit_journal_heading_div">
                <span className="Edit_journal_heading">Edit</span>
            </div>
             <div className='back_btn' onClick={() => dispatch(setJournal_from())}>
                                <NavigateBeforeIcon />
                                <span>Back</span>
                            </div>
            <div className="Edit_journal_form">
                <Formik initialValues={{
                    script: '',
                    date: '',
                    marketConditions: '',
                    entryReasons: '',
                    sourceOfTrade: '',
                    tradeType: '',
                    entryPrice: '',
                    noOfShares: '',
                    avgPrice: '',
                    exitDate: '',
                    exitPrice: '',

                    profite_loss: '',
                    scripBehaviour: '',
                    reasonsOfExit: '',
                    lessonLearnT: '',
                    if: ''

                }}>
                    {({ values, handleBlur, handleChange, handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <div className="Edit_journal_form_div">
                                <Autocomplete
                                    options={stockName}
                                    getOptionLabel={(option) => option.label}
                                    className="Edit_journal_inputField"
                                    sx={{margin: '5px'}}

                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Stock Name"
                                            placeholder="Stock Name"
                                        />
                                    )}
                                />
                                <TextField
                                    id="outlined-required"
                                    label="Date"
                                    selected={values.date}
                                    onChange={(date) => handleChange({ target: { name: "trade_date", value: date } })} // Handle date change
                                    onBlur={handleBlur}
                                    type="date"
                                    name="date"
                                    InputLabelProps={{ shrink: true }}
                                    required
                                    className="Edit_journal_inputField"
                                    sx={{margin: '5px'}}


                                />
                                <TextField
                                    id="outlined-required"
                                    label="Trade Type"
                                    type="text"
                                    placeholder="Trade Type..."
                                    name='tradeType'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.tradeType}
                                    className="Edit_journal_inputField"
                                    sx={{margin: '5px'}}

                                />
                                <TextField
                                    id="outlined-required"
                                    label="Entry Price"
                                    type="text"
                                    placeholder="Entry Price ..."
                                    name='entryPrice'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.entryPrice}
                                    className="Edit_journal_inputField"
                                    sx={{margin: '5px'}}

                                />
                                <TextField
                                    id="outlined-required"
                                    label="No Of Shares"
                                    type="number"
                                    placeholder="No Of Shares..."
                                    name='noOfShares'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.noOfShares}
                                    className="Edit_journal_inputField"
                                    sx={{margin: '5px'}}

                                />
                                <TextField
                                    id="outlined-required"
                                    label="Average Price"
                                    type="number"
                                    placeholder="Average Price..."
                                    name='avgPrice'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.avgPrice}
                                    className="Edit_journal_inputField"
                                    sx={{margin: '5px'}}

                                />
                                <TextField
                                    id="outlined-required"
                                    label="Exit Date"
                                    selected={values.exitDate}
                                    onChange={(date) => handleChange({ target: { name: "exitedate", value: exitDate } })} // Handle date change
                                    onBlur={handleBlur}
                                    type="date"
                                    name="exitedate"
                                    InputLabelProps={{ shrink: true }}
                                    required
                                    className="Edit_journal_inputField"
                                    sx={{margin: '5px'}}


                                />
                                <TextField
                                    id="outlined-required"
                                    label="Exit Price"
                                    type="number"
                                    placeholder="Exit Price..."
                                    name='exitPrice'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.exitPrice}
                                    className="Edit_journal_inputField"
                                    sx={{margin: '5px'}}

                                />
                                <TextField
                                    id="outlined-required"
                                    label="Profite / Loss"
                                    type="number"
                                    placeholder="Profite / Loss..."
                                    name='profite_loss'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.profite_loss}
                                    className="Edit_journal_inputField"
                                />
                                <TextField
                                    id="outlined-required"
                                    label="Market Conditions"
                                    type="number"
                                    placeholder="Market Conditions..."
                                    name='marketConditions'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.marketConditions}
                                    className="Edit_journal_inputField"
                                    multiline
                                    rows={3}
                                    sx={{margin: '5px'}}

                                />
                                <TextField
                                    id="outlined-required"
                                    label="Entry Reasons"
                                    type="text"
                                    placeholder="Entry Reasons..."
                                    name='entryReasons'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.entryReasons}
                                    className="Edit_journal_inputField"
                                    multiline
                                    rows={3}
                                    sx={{margin: '5px'}}

                                />
                                <TextField
                                    id="outlined-required"
                                    label="Source Of Trade"
                                    type="text"
                                    placeholder="Source Of Trade..."
                                    name='sourceOfTrade'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.sourceOfTrade}
                                    className="Edit_journal_inputField"
                                    multiline
                                    rows={3}
                                    sx={{margin: '5px'}}

                                />

                                <TextField
                                    id="outlined-required"
                                    label="Scrip Behaviour"
                                    type="text"
                                    placeholder="Scrip Behaviour..."
                                    name='scripBehaviour'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.scripBehaviour}
                                    className="Edit_journal_inputField"
                                    multiline
                                    rows={3}
                                    sx={{margin: '5px'}}

                                />
                                <TextField
                                    id="outlined-required"
                                    label="Reasons Of Exit"
                                    type="text"
                                    placeholder="Reasons Of Exit..."
                                    name='reasonsOfExit'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.reasonsOfExit}
                                    className="Edit_journal_inputField"
                                    multiline
                                    rows={3}
                                    sx={{margin: '5px'}}

                                />
                                <TextField
                                    id="outlined-required"
                                    label="Lesson Learnt"
                                    type="text"
                                    placeholder="Lesson Learnt..."
                                    name='lessonLearnT'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.lessonLearnT}
                                    className="Edit_journal_inputField"
                                    multiline
                                    rows={3}
                                    sx={{margin: '5px'}}

                                />
                                <TextField
                                    id="outlined-required"
                                    label="If ?"
                                    type="text"
                                    placeholder="If ?..."
                                    name='if'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.if}
                                    className="Edit_journal_inputField"
                                    multiline
                                    rows={3}
                                    sx={{margin: '5px'}}

                                />


                            </div>
                            <div className="Edit_submit_btn_din">

                                <Fab variant="extended" color="primary" type="submit">
                                    <SendIcon sx={{ mr: 1.5 }} />
                                    Submit
                                </Fab>
                            </div>

                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}