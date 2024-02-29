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
                                <table width="100%" border="0" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td width="37%" rowspan="7"><img src="/images/Temp_huazhu_02.jpg" width="52" height="451" alt=""></td>
                                    <td width="63%">
                                        <!-- <a href="about.htm" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('Image45','','/images/Temp_huazhu_03.jpg',1)"><img src="/images/Temp_huazhu_1_03.jpg" name="Image45" width="170" height="46" border="0"></a> -->
                                        <NuxtLink to="/about"><img src="/images/Temp_huazhu_1_03.jpg" name="Image45" width="170" height="46" border="0"></NuxtLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <!-- <a href="service.htm" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('Image46','','/images/Temp_huazhu_06.jpg',1)"><img src="/images/Temp_huazhu_1_06.jpg" name="Image46" width="170" height="46" border="0"></a> -->
                                        <NuxtLink to="/service"><img src="/images/Temp_huazhu_1_06.jpg" name="Image46" width="170" height="46" border="0"></NuxtLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <!-- <a href="work.htm" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('Image47','','/images/Temp_huazhu_07.jpg',1)"><img src="/images/Temp_huazhu_1_07.jpg" name="Image47" width="170" height="47" border="0"></a> -->
                                        <NuxtLink to="/work"><img src="/images/Temp_huazhu_1_07.jpg" name="Image47" width="170" height="47" border="0"></NuxtLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <!-- <a href="client.htm" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('Image48','','/images/Temp_huazhu_08.jpg',1)"><img src="/images/Temp_huazhu_1_08.jpg" name="Image48" width="170" height="47" border="0"></a> -->
                                        <NuxtLink to="/client"><img src="/images/Temp_huazhu_1_08.jpg" name="Image48" width="170" height="47" border="0"></NuxtLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <!-- <a href="join.htm" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('Image49','','/images/Temp_huazhu_09.jpg',1)"><img src="/images/Temp_huazhu_1_09.jpg" name="Image49" width="170" height="46" border="0"></a> -->
                                        <NuxtLink to="/join"><img src="/images/Temp_huazhu_1_09.jpg" name="Image49" width="170" height="46" border="0"></NuxtLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <!-- <a href="contact.htm" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('Image50','','/images/Temp_huazhu_10.jpg',1)"><img src="/images/Temp_huazhu_1_10.jpg" name="Image50" width="170" height="45" border="0"></a> -->
                                        <NuxtLink to="/contact"><img src="/images/Temp_huazhu_1_10.jpg" name="Image50" width="170" height="45" border="0"></NuxtLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td><img src="/images/Temp_huazhu_1_11.jpg" width="170" height="174"></td>
                                </tr>
                                </table>
                            </div>
                        </td>
                        <td>
                            <slot name="default"></slot>
                        </td>
                        <td width="180"><img src="/images/Temp_huazhu_05.jpg" width="180" height="451" alt=""></td>
                    </tr>
                    <tr>
                        <td colspan="3" background="/images/Temp_huazhu_1_12.jpg">
                            <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                            <tr>
                                <td height="35"><div align="center" class="copyright">Copyright 2007 &copy; huazhu.  All rights reserved.</div></td>
                            </tr>
                            </table>
                            <p>&nbsp;</p>
                            <p>&nbsp;</p>
                            <p>&nbsp;</p>
                            <p>&nbsp;</p>
                        </td>
                    </tr>
                    </table>
                </div>
            </td>
        </tr>
    </table>
</template>
