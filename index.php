<?php 
include 'head.php';
include 'aside.php';
include 'header.php';
?>
                <!-- Begin Page Content -->
                <div class="container-fluid">

                    <!-- Page Heading -->
                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Bienvenido</h1>
                    </div>

                    <!-- Content Row -->
                    <div class="row">

                        <img style="text-align:center;" src="data:image/png;base64,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" alt="">

                    </div>

                </div>
                <!-- /.container-fluid -->

            </div>
            <!-- End of Main Content -->

<?php
include 'footer.php';
?>