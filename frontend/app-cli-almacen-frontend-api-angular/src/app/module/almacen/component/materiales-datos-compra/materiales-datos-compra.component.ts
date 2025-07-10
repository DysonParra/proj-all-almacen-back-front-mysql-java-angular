/*
 * @overview        {MaterialesDatosCompraComponent}
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
import { Component } from '@angular/core';
import { GenericComponent } from '@app/module/essential/component/generic.component';
import { MaterialesDatosCompraViewModel } from '../../model/materiales-datos-compra.model';

/**
 * TODO: Description of {@code MaterialesDatosCompraComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-materiales-datos-compra',
    templateUrl: './materiales-datos-compra.component.html',
    standalone: false,
    styleUrls: ['./materiales-datos-compra.component.css']
})
export class MaterialesDatosCompraComponent extends GenericComponent<MaterialesDatosCompraViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: MaterialesDatosCompraViewModel) {
        super(entityInstance);
    }

}
