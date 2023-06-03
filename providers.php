<?php 
include 'head.php';
include 'aside.php';
include 'header.php';
?>
                <!-- Begin Page Content -->
                <div class="container-fluid">

                    <!-- Page Heading -->
                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Gestión de Proveedores</h1>
                    </div>

                    <!-- Content Row -->
                    <div class="row">

                        <form class="user col-lg-12 mb-4">
                            <div class="form-group row">
                                <div class="col-md-6 mb-3 mb-sm-0">
                                    <input type="text" class="form-control form-control-user" id="id_product"
                                        placeholder="ID" value="0" disabled>
                                </div>
                                <div class="col-md-6">
                                    <input type="text" class="form-control form-control-user" id="product_name"
                                        placeholder="Nombre">
                                </div>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control form-control-user" id="product_description"
                                    placeholder="Descripcion">
                            </div>
                            <div class="form-group row">                            
                                <div class="col-md-6 mb-3 mb-sm-0">
                                    <input type="text" class="form-control form-control-user" id="laboratoryName"
                                        placeholder="Nombre del laboratorio">
                                </div>                            
                                <div class="col-md-6 mb-3 mb-sm-0">
                                    <input type="text" class="form-control form-control-user" id="product_state"
                                        placeholder="Estado">
                                </div>
                            </div>
                            <div class="form-group row">
                                <a href="" id="btnGuardarProduct" class="btn btn-primary btn-user btn-block col-md-3">
                                Guardar
                                </a>
                                <a href="" id="btnLimpiarProduct" class="btn btn-warning  btn-user col-md-3">
                                    Limpiar
                                </a>
                            </div>
                        </form>

                        <div class="card shadow mb-4">
                            <div class="card-header py-3">
                                <h6 class="m-0 font-weight-bold text-primary">Productos</h6>
                            </div>
                            <div class="card-body col-md-12">
                                <div class="table-responsive">
                                    <table id="tableProviders" class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Tipo Identificación</th>
                                                <th>Nombre Razon Social</th>
                                                <th>Direccion</th>
                                                <th>Contacto</th>
                                                <th>Telefono</th>
                                                <th>Estado</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th>ID</th>
                                                <th>Tipo Identificación</th>
                                                <th>Nombre Razon Social</th>
                                                <th>Direccion</th>
                                                <th>Contacto</th>
                                                <th>Telefono</th>
                                                <th>Estado</th>
                                            </tr>
                                        </tfoot>
                                        <tbody>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <!-- /.container-fluid -->

            </div>
            <!-- End of Main Content -->
            
<?php
include 'footer.php';
?>