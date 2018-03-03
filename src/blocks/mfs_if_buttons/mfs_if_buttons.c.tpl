if (btn)
{
    buttonNumber = btn & B00111111;
    buttonAction = btn & B11000000;
    if (buttonNumber == {{opt_button}} && buttonAction == {{mode_button}}) {
        {{code_btn}}
    } 
}
