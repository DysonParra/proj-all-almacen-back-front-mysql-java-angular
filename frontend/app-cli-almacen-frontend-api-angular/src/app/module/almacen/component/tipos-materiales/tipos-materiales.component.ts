/*
 * @overview        {TiposMaterialesComponent}
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
import { TiposMaterialesViewModel } from '../../model/tipos-materiales.model';

/**
 * TODO: Description of {@code TiposMaterialesComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-tipos-materiales',
    templateUrl: './tipos-materiales.component.html',
    standalone: false,
    styleUrls: ['./tipos-materiales.component.css']
})
export class TiposMaterialesComponent extends GenericComponent<TiposMaterialesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: TiposMaterialesViewModel) {
        super(entityInstance);
    }

}
