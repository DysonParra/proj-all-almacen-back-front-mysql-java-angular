/*
 * @overview        {UnidadMedidaComponent}
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
import { UnidadMedidaViewModel } from '../../model/unidad-medida.model';

/**
 * TODO: Description of {@code UnidadMedidaComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-unidad-medida',
    templateUrl: './unidad-medida.component.html',
    standalone: false,
    styleUrls: ['./unidad-medida.component.css']
})
export class UnidadMedidaComponent extends GenericComponent<UnidadMedidaViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: UnidadMedidaViewModel) {
        super(entityInstance);
    }

}
