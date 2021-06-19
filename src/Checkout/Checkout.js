import { React, useState, useEffect } from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, Divider, Button, makeStyles, CircularProgress} from '@material-ui/core'
import AddressForm from './AddressForm'
import PaymentForm from './PaymentForm'
import { commerce } from '../library/commerce'
import { Link, useHistory } from 'react-router-dom'

const useStyles = makeStyles({
    CheckoutPaper: {
        padding: '5%',
        width: '75%',
        
    }
})

const steps = ['Shipping address', 'Payment details']

const Checkout = ({ cart, order, onCaptureCheckout, error }) => {

    const [activeStep, setActiveStep] = useState(0)
    const [checkoutToken, setCheckoutToken] = useState(null)
    const [shippingData, setShippingData] = useState({})
    const Form = () => activeStep === 0 ? <AddressForm next={next} checkoutToken={checkoutToken} /> : <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} backStep={backStep} onCaptureCheckout={onCaptureCheckout} nextStep={nextStep} />
    const classes = useStyles()
    const history = useHistory()

    useEffect(() => {
        if (cart.id) {
            const generateToken = async () => {
                try {
                    const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' })
                    setCheckoutToken(token)
                    console.log(token)
                    console.log(cart)
                } catch (error) {
                    if (activeStep !== steps.length) history.push('/');
                }
            }
            generateToken()
        }// eslint-disable-next-line
    }, [cart])

    const nextStep = () => setActiveStep(prevActiveStep => prevActiveStep + 1)
    const backStep = () => setActiveStep(prevActiveStep => prevActiveStep - 1)

    const next = (data) => {
        setShippingData(data)
        nextStep()
    }

    let Confirmation = () => (order.customer ? (
        <>
            <div>
                <Typography variant="h5">Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}!</Typography>
                <Divider className={classes.divider} />
                <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
            </div>
            <br />
            <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
        </>
    ) : (
        <div className={classes.spinner}>
            <CircularProgress />
        </div>
    ))

    if (error) {
        Confirmation = () => (
            <>
                <Typography variant="h5">Error: {error}</Typography>
                <br />
                <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
            </>
        );
    }

    return (
        <>
        <div style={{height: '20px'}}></div>
            <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Paper className={classes.CheckoutPaper}>
                    <Typography variant='h4'>Checkout</Typography>
                    <Stepper  activeStep={activeStep}>{steps.map((step) => (
                        <Step key={step}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    ))}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
                </Paper>
            </main>
        </>
    )
}

export default Checkout
