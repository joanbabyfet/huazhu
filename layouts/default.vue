<template>
    <table width="100%" border="0" cellpadding="0" cellspacing="0">
        <tr>
            <td>
                <div align="center">
                    <table id="Table_01" width="1024" height="743" border="0" cellpadding="0" cellspacing="0">
                    <tr>
                        <td colspan="3"><div id="logo"></div></td>
                    </tr>
                    <tr>
                        <td width="222" height="451" valign="top">
                            <div id="item">
                                <Header></Header>
                            </div>
                        </td>
                        <td>
                            <slot name="default"></slot>
                        </td>
                        <td width="180"><img src="/images/Temp_huazhu_05.jpg" width="180" height="451" alt=""></td>
                    </tr>
                    <tr>
                        <td colspan="3" background="/images/Temp_huazhu_1_12.jpg">
                            <Footer></Footer>
                        </td>
                    </tr>
                    </table>
                </div>
            </td>
        </tr>
    </table>
</template>
