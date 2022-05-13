function eliminar(id) {
	swal({
		title: "¿Estas seguro de que quieres eliminar?",
		text: "Una vez eliminado, ya no se regresará.",
		icon: "warning",
		buttons: true,
		dangerMode: true,
	})
		.then((OK) => {
			if (OK) {
				$.ajax({
					url: "/eliminar/" + id,
					success: function(res) {
						console.log(res);
					}
				});
				swal("¡Tu archivo ha sido eliminado!", {
					icon: "success",
				}).then((ok) => {
					if (ok) {
						location.href = "/listar";
					}
				});
			} else {
				swal("Tu archivo esta a salvo.");
			}
		});
}