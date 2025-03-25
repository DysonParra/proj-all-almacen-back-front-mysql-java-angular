/*
 * @fileoverview    {HeaderComponent}
 *
 * @version         2.0
 *
 * @author          Dyson Arley Parra Tilano <dysontilano@gmail.com>
 *
 * @copyright       Dyson Parra
 * @see             github.com/DysonParra
 *
 * History
 * @version 1.0     Implementation done.
 * @version 2.0     Documentation added.
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Routes, Router } from '@angular/router';

/**
 * TODO: Description of {@code HeaderComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    standalone: false,
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    public topMenu: any[];
    public showSubmenuModes: any;
    public showFirstSubmenuModes: any;

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(private router: Router) {

        this.topMenu = [
            {
                name: 'Agentes',
                route: 'agentes',
                items: []
            },            {
                name: 'Bodegas',
                route: 'bodegas',
                items: []
            },            {
                name: 'CentrosTrabajos',
                route: 'centros-trabajos',
                items: []
            },            {
                name: 'Componentes',
                route: 'componentes',
                items: []
            },            {
                name: 'Conceptos',
                route: 'conceptos',
                items: []
            },            {
                name: 'CondicionesPagos',
                route: 'condiciones-pagos',
                items: []
            },            {
                name: 'Consecutivos',
                route: 'consecutivos',
                items: []
            },            {
                name: 'Cotizacion',
                route: 'cotizacion',
                items: []
            },            {
                name: 'EstadosMovimientos',
                route: 'estados-movimientos',
                items: []
            },            {
                name: 'EstadosRemisiones',
                route: 'estados-remisiones',
                items: []
            },            {
                name: 'EstadosSaldos',
                route: 'estados-saldos',
                items: []
            },            {
                name: 'GrupoInterlocutores',
                route: 'grupo-interlocutores',
                items: []
            },            {
                name: 'InterlocutorFinanzas',
                route: 'interlocutor-finanzas',
                items: []
            },            {
                name: 'InterlocutoresComerciales',
                route: 'interlocutores-comerciales',
                items: []
            },            {
                name: 'InterlocutoresCondicionPago',
                route: 'interlocutores-condicion-pago',
                items: []
            },            {
                name: 'ListaDeMateriales',
                route: 'lista-de-materiales',
                items: []
            },            {
                name: 'ListasPrecios',
                route: 'listas-precios',
                items: []
            },            {
                name: 'ListasPreciosMateriales',
                route: 'listas-precios-materiales',
                items: []
            },            {
                name: 'Localizaciones',
                route: 'localizaciones',
                items: []
            },            {
                name: 'Materiales',
                route: 'materiales',
                items: []
            },            {
                name: 'MaterialesCaracteristicas',
                route: 'materiales-caracteristicas',
                items: []
            },            {
                name: 'MaterialesCostosPromedios',
                route: 'materiales-costos-promedios',
                items: []
            },            {
                name: 'MaterialesDatosCompra',
                route: 'materiales-datos-compra',
                items: []
            },            {
                name: 'MaterialesDescripciones',
                route: 'materiales-descripciones',
                items: []
            },            {
                name: 'MmCodigoEquivalente',
                route: 'mm-codigo-equivalente',
                items: []
            },            {
                name: 'MmTmcCaracteristica',
                route: 'mm-tmc-caracteristica',
                items: []
            },            {
                name: 'MmTmcdDescripciones',
                route: 'mm-tmcd-descripciones',
                items: []
            },            {
                name: 'Movimientos',
                route: 'movimientos',
                items: []
            },            {
                name: 'MovimientosDetalles',
                route: 'movimientos-detalles',
                items: []
            },            {
                name: 'OrdenDeTrabajo',
                route: 'orden-de-trabajo',
                items: []
            },            {
                name: 'OrdenProduccion',
                route: 'orden-produccion',
                items: []
            },            {
                name: 'PlanCompra',
                route: 'plan-compra',
                items: []
            },            {
                name: 'Remisiones',
                route: 'remisiones',
                items: []
            },            {
                name: 'RemisionesCompras',
                route: 'remisiones-compras',
                items: []
            },            {
                name: 'RemisionesComprasMateriales',
                route: 'remisiones-compras-materiales',
                items: []
            },            {
                name: 'RemisionesVenta',
                route: 'remisiones-venta',
                items: []
            },            {
                name: 'RemisionesVentaMateriales',
                route: 'remisiones-venta-materiales',
                items: []
            },            {
                name: 'Saldos',
                route: 'saldos',
                items: []
            },            {
                name: 'Sociedad',
                route: 'sociedad',
                items: []
            },            {
                name: 'TipoInterlocutorComercial',
                route: 'tipo-interlocutor-comercial',
                items: []
            },            {
                name: 'TipoListaMaterial',
                route: 'tipo-lista-material',
                items: []
            },            {
                name: 'TipoUnidadMedida',
                route: 'tipo-unidad-medida',
                items: []
            },            {
                name: 'TiposAgentes',
                route: 'tipos-agentes',
                items: []
            },            {
                name: 'TiposDocumentos',
                route: 'tipos-documentos',
                items: []
            },            {
                name: 'TiposDocumentosConceptos',
                route: 'tipos-documentos-conceptos',
                items: []
            },            {
                name: 'TiposDocumentosTiposAgentes',
                route: 'tipos-documentos-tipos-agentes',
                items: []
            },            {
                name: 'TiposMateriales',
                route: 'tipos-materiales',
                items: []
            },            {
                name: 'TiposMovimientos',
                route: 'tipos-movimientos',
                items: []
            },            {
                name: 'Ubicaciones',
                route: 'ubicaciones',
                items: []
            },            {
                name: 'UnidadMedida',
                route: 'unidad-medida',
                items: []
            },            {
                name: 'Zonas',
                route: 'zonas',
                items: []
            },
        ];

        this.showSubmenuModes = [
            {
                name: "onhover",
                delay: { show: 0, hide: 0 }
            },
            {
                name: "onclick",
                delay: { show: 0, hide: 0 }
            }
        ];

        this.showFirstSubmenuModes = this.showSubmenuModes[0];

    }

    /**
     * TODO: Description of method {@code ngOnInit}.
     *
     */
    public ngOnInit(): void {

    }

    /**
     * TODO: Description of method {@code itemClick}.
     *
     */
    public itemClick(data: any): void {
        if (data.route && (!data.items || data.items.length == 0))
            this.router.navigateByUrl(data.route);
    }

}
